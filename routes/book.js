const mongoose = require("mongoose");
const Book = mongoose.model("Book");
const Rating = mongoose.model("Rating");
const Image = mongoose.model("Image");

module.exports = (app) => {
  app.get("/api/meta", async (req, res, next) => {
    const books = await Book.find({}).limit(100);
    res.send(books);
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
