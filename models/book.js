const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Book Schema
 */
const bookSchema = new Schema({
  id: Number,
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
  year: Number,
  title: String,
  description: String,
});

mongoose.model("Book", bookSchema);
