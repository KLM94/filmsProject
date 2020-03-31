const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");

app.use(express.json());

app.use("/api", apiRouter);

const handleServerErrors = (err, req, res, next) => {
  console.log(err, "<<<<<<");
  if (err.status) {
    console.log(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = app;
