const express = require("express");
const router = express.Router();
const rMinicamp = require("./minicamps.route");
const rVideo = require("./videos.route");
const rAuth = require("./auth.route");
const { authentication } = require("../middleware/auth");

router
  .get("/", (req, res) => {
    res.send("<h1>Its Works</h1>");
  })
  .use(rAuth)
  .use(authentication, rMinicamp)
  .use(rVideo);

module.exports = router;
