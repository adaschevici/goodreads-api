"use strict";

const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  User = mongoose.model("User");

exports.register = async function (userData) {
  const { fullName, email, password } = userData;
  const newUser = new User({ fullName, email });
  newUser.passwordHash = bcrypt.hashSync(password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return {
        message: err,
      };
    } else {
      user.passwordHash = undefined;
      return user;
    }
  });
};
