const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");

const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function () {
  this.useCache = true;

  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    console.log(`serving from DB ${this.mongooseCollection.name}`);
    return exec.apply(this, arguments);
  }
  console.log("serving from cache");
  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  // See if we have a value for key in redis
  const cacheValue = await client.get(key);
  //if we do, return that
  if (cacheValue) {
    console.log(key);
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);
  }
  //othrwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);
  client.set(key, JSON.stringify(result));

  return result;
};

module.exports = {
  clearCache(key) {
    client.del(JSON.stringify(key));
  },
};
