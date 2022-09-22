const express = require("express");
const router = express.Router();
const rMinicamp = require("./minicamps.route");
const rVideo = require("./videos.route");
const rAuth = require("./auth.route");
const { authentication } = require("../middleware/auth");

router
  .get("/", (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })
  .use(rAuth)
  .use(authentication, rMinicamp)
  .use(authentication, rVideo);

module.exports = router;
