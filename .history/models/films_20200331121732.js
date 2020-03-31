const connection = require("../db/connection");

exports.fetchAllFilms = () => {
  return connection
    .select("*")
    .from("films")
    .then(films => {
      return films;
    });
};
