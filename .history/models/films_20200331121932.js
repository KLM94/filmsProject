const connection = require("../db/connection");

exports.fetchAllFilms = () => {
  console.log("In the model...");
  return connection
    .select("*")
    .from("films")
    .then(films => {
      return { films: films };
    });
};
