const { fetchAllFilms } = require("../models/films");

exports.getAllFilms = (req, res, next) => {
  fetchAllFilms()
    .then(function(films) {
      res.status(200).send(films);
    })
    .catch(err => {
      console.log(err);
    });
};
