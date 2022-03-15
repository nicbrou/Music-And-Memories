const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const savedCntrl = require("../controllers/saved");

// // Routes
router.get("/user/saved", savedCntrl.saved_create_get);
// router.post("/user/saved", savedCntrl.saved_create_post);

module.exports = router;
