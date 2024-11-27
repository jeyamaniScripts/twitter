const express = require("express");
const siginin = require("../controller/auth.controller");
const router = express.Router();

router.get("/siginin", siginin);

module.exports = router;
