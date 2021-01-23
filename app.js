var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", userRouter);
app.use("/api/meta", (req, res, next) => {
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

app.use("/api/ratings", (req, res, next) => {
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

app.use("/api/images", (req, res, next) => {
  res.send([
    {
      id: 9780439023480,
      image: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
    },
    {
      id: 9780439554930,
      image: "https://images.gr-assets.com/books/1474154022m/3.jpg",
    },
  ]);
});
app.use("/api/book-progress/:username", (req, res, next) => {
  username = req.params.id;
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: "error_cucamanga" });
});

module.exports = app;
