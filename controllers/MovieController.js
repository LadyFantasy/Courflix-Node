class MovieController {
  constructor(MovieService, SerieService) {
    this.MovieService = MovieService;
    this.SerieService = SerieService;
  }

  async getMovies(req, res) {
    let page = req.query.page ? req.query.page : 1;

    const movies = await this.MovieService.getMovies(page);

    return res.json(movies);
  }

  async getMoviesAndSeries(req, res) {
    const { id } = req.params;

    try {
      const movie = await this.MovieService.getMoviesById(id);

      if (!movie) {
        const serie = await this.SerieService.getSeriesById(id);
        return res.json(serie);
      } else if (movie) {
        return res.json(movie);
      }
    } catch (e) {
      return res.json({
        error: true,
        msg: `No se encontró ningun contenido con el id: ${id}`
      });
    }
  }

  async getMoviesById(req, res) {
    const { id } = req.params;

    if (id) {
      const movie = await this.MovieService.getMoviesById(id);
      return res.json(movie);
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = MovieController;
