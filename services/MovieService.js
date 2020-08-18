const Movie = require("../models/Movie");

class MovieService {
  constructor() {
    this.limit = 15;
  }

  getMovies(page) {
    const skip = (page - 1) * this.limit;
    const query = Movie.find().skip(skip).limit(this.limit).exec();

    return query;
  }

  getMoviesById(id) {
    const query = Movie.findOne({ _id: id }).exec();

    return query;
  }
}

module.exports = MovieService;
