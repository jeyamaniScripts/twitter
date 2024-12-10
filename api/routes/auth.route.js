const express = require("express");
const { signup, signin } = require("../controller/auth.controller");
const router = express.Router();

router.get("/signup", signup);
router.get("/signin", signin);

module.exports = router;


