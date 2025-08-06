const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 600 },
  name: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
