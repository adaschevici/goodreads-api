const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
/**
 * User Schema
 */
const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    passwordHash: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerificationToken: String,
    emailVerified: Boolean,

    github: String,
    tokens: Array,

    profile: {
      name: String,
      picture: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("passwordHash")) return next();

  user.passwordHash = bcrypt.hashSync(user.passwordHash, SALT_WORK_FACTOR);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
