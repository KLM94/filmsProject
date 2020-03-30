const filmsRouter = require("express").Router();

const { getAllFilms } = require("../controllers/films");

filmsRouter.route("/").get(getAllFilms);

module.exports = filmsRouter;