const mongoose = require("mongoose");
const cleanCache = require("../middlewares/cleanCache");

const Book = mongoose.model("Book");
const Rating = mongoose.model("Rating");
const Image = mongoose.model("Image");

const { save } = require("../services/book.js");

module.exports = (app) => {
  app.get("/api/books", async (req, res, next) => {
    const books = await Book.find({}).cache().limit(100);
    res.send(books);
  });

  app.post("/api/books", cleanCache, async (req, res, next) => {
    try {
      const response = await save(req.body);
      res.send(response);
    } catch (err) {
      res.send(400, err);
    }
  });

  app.get("/api/books/progress/:username", (req, res, next) => {
    username = req.params.username;
    console.log(username);
    res.send([
      {
        id: 9780439023480,
        progress: 0,
      },
      {
        id: 9780439554930,
        progress: 0,
      },
    ]);
  });

  app.post("/api/books/progress/:username", (req, res, next) => {
    username = req.params.username;
    const { id, progress } = req.body;

    console.log(progress, id);

    res.send([
      {
        id: 9780439023480,
        progress: 0,
      },
      {
        id: 9780439554930,
        progress: 0,
      },
    ]);
  });

  app.get("/api/ratings", async (req, res, next) => {
    const ratings = await Rating.find({}).limit(100);
    res.send(ratings);
  });

  app.get("/api/images", async (req, res, next) => {
    const images = await Image.find({}).limit(100);
    res.send(images);
  });
};
