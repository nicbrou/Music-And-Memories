// First line will be the dependencies
const express = require("express");

const router = express.Router();

const indexCntrl = require("../controllers/index");

router.get("/", indexCntrl.index);

module.exports = router;
