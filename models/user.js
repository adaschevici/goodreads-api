const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

/**
 * User Schema
 */
const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  passwordHash: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

mongoose.model("User", userSchema);
