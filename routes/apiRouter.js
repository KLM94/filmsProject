const apiRouter = require("express").Router();
const filmsRouter = require("./filmsRouter");

apiRouter.use("/films", filmsRouter);

module.exports = apiRouter;
