const Serie = require("../models/Serie");

class SerieService {
  constructor() {
    this.limit = 10;
  }

  getSeries(page) {
    const skip = (page - 1) * this.limit;
    const query = Serie.find().skip(skip).limit(this.limit).lean().exec();

    return query;
  }

  getSeriesById(id) {
    const query = Serie.findOne({ _id: id }).exec();

    return query;
  }
}

module.exports = SerieService;
