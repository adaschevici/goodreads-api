const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Rating Schema
 */
const ratingSchema = new Schema({
  rating: String,
  book_id: Number,
});

mongoose.model("Rating", ratingSchema);
