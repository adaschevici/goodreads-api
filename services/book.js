"use strict";

const mongoose = require("mongoose"),
  Book = mongoose.model("Book");

exports.save = async function (bookData) {
  const { id, isbn, isbn13, authors, year, title, description } = bookData;

  const book = new Book({
    id,
    isbn,
    isbn13,
    authors,
    year,
    title,
    description,
  });

  return await book.save();
};
