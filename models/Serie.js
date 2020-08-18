const mongoose = require("mongoose");

const serieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  imgHero: {
    type: String,
    required: true
  },

  imgCarrousel: {
    type: String,
    required: true
  },

  carrouselMobile: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  seasons: {
    type: Number,
    required: true
  },

  chapters: {
    type: [
      {
        chapterImg: {
          type: String,
          required: true
        },
        chapterTitle: {
          type: String,
          required: true
        },
        chapterSynopsis: {
          type: String,
          required: true
        }
      }
    ]
  },

  synopsis: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Serie", serieSchema);
