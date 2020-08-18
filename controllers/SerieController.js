class SerieController {
  constructor(SerieService) {
    this.SerieService = SerieService;
  }

  async getSeries(req, res) {
    let page = req.query.page ? req.query.page : 1;

    const series = await this.SerieService.getSeries(page);

    return res.json(series);
  }

  async getSeriesById(req, res) {
    const { id } = req.params;

    if (id) {
      const serie = await this.SerieService.getSeriesById(id);
      return res.json(serie);
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = SerieController;
