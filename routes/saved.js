const express = require("express");
var methodOverride = require("method-override");
const router = express.Router();
router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

const savedCntrl = require("../controllers/saved");

// Save Playlist to Saved Page
router.get("/user/saved", savedCntrl.saved_create_get);
router.put("/user/saved/:id", savedCntrl.saved_create_put);
router.put("/user/saved/:id", savedCntrl.saved_create_put);

// Delete Playlist from Saved Page
router.delete("/user/saved/delete/:id", savedCntrl.saved_create_delete);

// Add Note to Saved Playlist
router.post("/user/saved/add/:id", savedCntrl.saved_addNote_post);

// Delete Note from Saved Playlist
router.delete("/user/saved/delete/notes/:id", savedCntrl.saved_addNote_delete);

module.exports = router;
