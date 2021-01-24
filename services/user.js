"use strict";

const secret = process.env.JWT_SECRET;
const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  User = mongoose.model("User");

exports.register = async function ({ fullName, email, password }) {
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

exports.login = async function ({ email, password }) {
  try {
    const user = await User.findOne({ email });
    if (!user.comparePassword(password))
      throw Error("Password + Email combination invalid");
    return jwt.sign({ email: user.email, fullName: user.fullName }, secret, {
      expiresIn: "1h",
    });
  } catch (e) {
    return null;
  }
};
