const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;
const mongoPort = process.env.MONGO_PORT;
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;
const mongoDbName = process.env.MONGO_DB_NAME;

require("./services/oauth/passport");
require("./models/book");
require("./models/image");
require("./models/rating");
require("./services/cache");

const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${mongoUser}:${mongoPass}@${mongoURI}:${mongoPort}/${mongoDbName}?authSource=${mongoDbName}`,
      option
    );
  } catch (error) {
    console.log("Failed to connect to mongodb");
  }
})();

const indexRouter = require("./routes/index");

const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
require("./routes/user")(app);
require("./routes/book")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ msg: "error" });
});

module.exports = app;
