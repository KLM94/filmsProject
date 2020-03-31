const { fetchAllFilms } = require("../models/films");

exports.getAllFilms = (req, res, next) => {
  console.log("in model");
  fetchAllfilms().then(console.log('in controller'))
};
