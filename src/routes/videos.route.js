const express = require("express");
const router = express.Router();
const {
  list,
  detail,
  create,
  destroy,
  update,
} = require("../controllers/video.controller");

router.get("/video", list);
router.get("/video/:id", detail);
router.post("/video", create);
router.delete("/video/:id", destroy);
router.put("/video/:id", update);

module.exports = router;
