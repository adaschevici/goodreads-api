const mongoose = require("mongoose");
const Book = mongoose.model("Book");

module.exports = (app) => {
  //   app.get("/api/meta", async (req, res) => {
  //     const books = await Book.find();

  //     res.send(books);
  //   });

  app.get("/api/meta", (req, res, next) => {
    res.send([
      {
        id: 9780439023480,
        isbn: "439023483",
        isbn13: "9780439023480",
        authors: "Suzanne Collins",
        year: 2008,
        title: "The Hunger Games",
        description:
          "Voluptatem aut sit consequatur accusantium perferendis. Perferendis sit voluptatem accusantium aut consequatur. Perferendis aut sit consequatur voluptatem accusantium. Sit consequatur voluptatem aut perferendis accusantium.",
      },
      {
        id: 9780439554930,
        isbn: "439554934",
        isbn13: "9780439554930",
        authors: "J.K. Rowling, Mary GrandPré",
        year: 1997,
        title: "Harry Potter and the Philosopher's Stone",
        description:
          "Voluptatem sit aut accusantium perferendis consequatur. Aut perferendis consequatur accusantium sit voluptatem. Aut accusantium perferendis voluptatem consequatur sit. Perferendis sit consequatur accusantium voluptatem aut.",
      },
    ]);
  });

  app.get("/api/ratings", (req, res, next) => {
    res.send([
      {
        id: 9780439023480,
        rating: 4.34,
      },
      {
        id: 9780439554930,
        rating: 4.44,
      },
    ]);
  });

  app.get("/api/images", (req, res, next) => {
    res.send([
      {
        id: 9780439023480,
        url: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
      },
      {
        id: 9780439554930,
        url: "https://images.gr-assets.com/books/1474154022m/3.jpg",
      },
    ]);
  });
};
