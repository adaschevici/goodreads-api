const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Book Schema
 */
const bookSchema = new Schema({
  isbn: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  isbn13: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  authors: String,
  title: String,
  description: String,
  year: Number,
});

mongoose.model("Book", bookSchema);
