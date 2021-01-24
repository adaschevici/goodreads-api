"use strict";

const secret = process.env.JWT_SECRET;
const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  User = mongoose.model("User");

exports.register = async function ({ fullName, email, password }) {
  const newUser = new User({ fullName, email, passwordHash: password });
  try {
    const user = await newUser.save();
    user.passwordHash = undefined;
    return user;
  } catch (err) {
    return {
      message: err,
    };
  }
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
