const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
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
  booksInProgress: [
    {
      book_id: Number,
      progress: String,
    },
  ],
});

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

mongoose.model("User", userSchema);
