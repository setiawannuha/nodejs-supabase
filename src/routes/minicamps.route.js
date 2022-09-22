const express = require("express");
const router = express.Router();
const {
  list,
  detail,
  create,
  destroy,
  update,
} = require("../controllers/minicamp.controller");

router.get("/minicamp", list);
router.get("/minicamp/:id", detail);
router.post("/minicamp", create);
router.delete("/minicamp/:id", destroy);
router.put("/minicamp/:id", update);

module.exports = router;
