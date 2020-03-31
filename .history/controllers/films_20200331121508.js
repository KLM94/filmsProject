const { fetchAllFilms } = require("../models/films");

exports.getAllFilms = (req, res, next) => {
  fetchAllFilms()
    .then(console.log("in controller"))
    .catch(err => {
      console.log(err);
    });
};
