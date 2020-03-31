process.env.NODE_ENV = "test";
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const app = require("../app");
const connection = require("../db/connection");

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

  it("responds with JSON, describing all endpoints", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(response => {
        expect(response.body).to.be.an("object");
      });
  });
});
