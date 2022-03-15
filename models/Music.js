// Dependencies
const mongoose = require("mongoose");

const musicSchema = mongoose.Schema({
  name: {
    type: String,
  },
  playlists: String,
  URL: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://cdn.shopify.com/s/files/1/2551/1584/products/music_notes-5_1200x1200.jpg?v=1511646993",
  },
});

const Music = mongoose.model("Music", musicSchema);

module.exports = { Music };
