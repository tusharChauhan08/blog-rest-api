let mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      cast: false,
    },
    content: {
      type: String,
      required: true,
      cast: false,
    },
    author: {
      type: String,
      required: true,
      cast: false,
    },
    tag: {
      type: String,
      required: true,
      cast: false,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });

let blogModel = new mongoose.model("blog", blogSchema);

module.exports = blogModel;