const { userData, commentData } = require("../data/index");

exports.seed = function(knex) {
    return knex.migrate
    .rollback()
    .then(() => 
        knex.migrate.latest())
    })
}

exports.seed = function(knex) {
    return knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => {
        return knex('houses')
          .insert(houseData)
          .returning('*');
      })
      .then((houseRows) => {
        // <-- do the rest of the seed logic here ...
      });
  };