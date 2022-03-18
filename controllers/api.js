// API to call third party API
const axios = require("axios").default;
const baseURL = "https://spotify23.p.rapidapi.com";
const dotenv = require("dotenv");
dotenv.config();
const { Music } = require("../models/Music");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.api_music_get = (req, res) => {
  axios({
    method: "get",
    url: baseURL + "/search/",
  })
    .then((response) => {
      //   console.log(response.data);
      res.render("../views/api.ejs", { response });
    })
    .catch((error) => {
      console.log(error);
    });
};

const playlists = "1950s Folk";
var options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/search/",
  params: {
    q: playlists,
    type: "playlists", //change this to playlists or artists to save in database
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
    "x-rapidapi-key": process.env.spotifyApiKey,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.playlists.items);
    response.data.playlists.items.forEach((item) => {
      if (item.data.uri.includes("spotify")) {
        let URLarr = item.data.uri.split(":");
        let music = new Music({
          name: item.data.name,
          playlists: playlists.toUpperCase(),
          URL: `https://open.spotify.com/playlist/${URLarr[2]}`,
          image:
            item.data.images.items[0].sources[0].url ||
            "https://cdn.shopify.com/s/files/1/2551/1584/products/music_notes-5_1200x1200.jpg?v=1511646993",
        });
        music.save();
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
