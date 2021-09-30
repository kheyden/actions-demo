"use strict";

const express = require("express");
const { logger } = require("./logger");

const app = express();

app.get("/", (req, res, next) => {
  logger.info("processing index route");
  res.status(200).json({ foo: bar });
});

app.listen(3000, () => console.log("listening on 3000"));
