const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});


//Movies
const MovieController = require("../controllers/MovieController");
const MovieService = require("../services/MovieService");

//Series
const SerieController = require("../controllers/SerieController");
const SerieService = require("../services/SerieService");
const SerieInstance = new SerieController(new SerieService());

const MovieInstance = new MovieController(new MovieService(), new SerieService());


// ROUTES


router.get('/',function(req,res){
  res.sendFile("../views/index.html")
});


router.get("/movies", (req, res) => {
  MovieInstance.getMovies(req, res);
});

router.get("/movies/:id", (req, res) => {
  MovieInstance.getMoviesById(req, res);
});

router.get("/series", (req, res) => {
  SerieInstance.getSeries(req, res);
});

router.get("/series/:id", (req, res) => {
  SerieInstance.getSeriesById(req, res);
});

router.get("/content/:id", (req, res) => {
  MovieInstance.getMoviesAndSeries(req, res);
});

module.exports = router;
