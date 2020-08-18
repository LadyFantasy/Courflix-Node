const mongoose = require("mongoose")


const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    imgHero: {
        type: String,
        required: true,
    },

    imgCarrousel: {
        type: String,
        required:true
    },

    carrouselMobile: {
        type: String,
        required:true
    },

    age: {
        type: Number,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    synopsis: {
        type: String,
        required: true
    },

    percentageWatched: {
        type: Number,
        required: true
    },

    recomended: {
        type: Boolean
    }

})


module.exports = mongoose.model("Movie", movieSchema)