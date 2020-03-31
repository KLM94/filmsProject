process.env.NODE_ENV = "test";
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const app = require("../app");
const connection = require("../db/connection");

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/films", () => {
    it("GET 200, responds with an array of all the films", () => {
      return request(app)
        .get("/api/films")
        .expect(200)
        .then(({ body: { films } }) => {
          console.log(films);
        });
    });
  });
});
