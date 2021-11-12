const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String },
    user: { type: String },
    sdt: { type: String },
    pass: { type: String },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Course', Course);
