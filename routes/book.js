const mongoose = require("mongoose");
const cleanCache = require("../middlewares/cleanCache");

const Book = mongoose.model("Book");
const Rating = mongoose.model("Rating");
const Image = mongoose.model("Image");
const User = mongoose.model("User");

const { save } = require("../services/book.js");

module.exports = (app) => {
  app.get("/api/books", async (req, res, next) => {
    const books = await Book.find({}).cache().limit(100);
    res.json(books);
  });

  app.post("/api/books", cleanCache, async (req, res, next) => {
    try {
      const response = await save(req.body);
      res.json(response);
    } catch (err) {
      res.status(400).json({ err });
    }
  });

  app.get("/api/books/progress/:username", async (req, res, next) => {
    username = req.params.username;
    try {
      const user = await User.findOne({ email: req.params.username });
      res.json(user.booksInProgress);
    } catch (err) {
      console.log(err);
      res.status(400).json({ err });
    }
  });

  app.post("/api/books/progress/:username", async (req, res, next) => {
    username = req.params.username;
    const { id, progress } = req.body;
    console.log(progress, id);
    try {
      await User.updateOne(
        { email: req.params.username },
        { $push: { booksInProgress: { book_id: id, progress } } }
      );
      const user = await User.findOne({ email: req.params.username });
      res.json(user.booksInProgress);
    } catch (err) {
      console.log(err);
      res.status(400).json({ err });
    }
  });

  app.get("/api/ratings", async (req, res, next) => {
    const ratings = await Rating.find({}).limit(100);
    res.json(ratings);
  });

  app.get("/api/images", async (req, res, next) => {
    const images = await Image.find({}).limit(100);
    res.json(images);
  });
};
