// First line will be the dependencies
const express = require("express");

// Initialize router
const router = express.Router();

const indexCntrl = require("../controllers/index");

router.get("/", indexCntrl.index);

// Export to other files
module.exports = router;
