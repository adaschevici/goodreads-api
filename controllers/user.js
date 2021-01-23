"use strict";

var mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  User = mongoose.model("User");

exports.register = async function (userData) {
  const { fullName, email, password } = userData;
  var newUser = new User({ fullName, email });
  newUser.passwordHash = bcrypt.hashSync(userData.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      console.log(err);
      return {
        message: err,
      };
    } else {
      user.hash_password = undefined;
      console.log(user);
      return user;
    }
  });
};
