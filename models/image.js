const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Images Schema
 */
const imageSchema = new Schema({
  url: String,
  id: { type: Number, ref: "Book" },
});

mongoose.model("Image", imageSchema);
