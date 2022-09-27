const express = require("express");
const router = express.Router();
const { login, register, profile } = require("../controllers/auth.controller");
const { authentication } = require("../middleware/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", authentication, profile);

module.exports = router;
