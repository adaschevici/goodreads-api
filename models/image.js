const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Images Schema
 */
const imageSchema = new Schema({
  url: String,
  book_id: Number,
});

mongoose.model("Image", imageSchema);
