// API to call third party API
const axios = require("axios").default;
const baseURL = "https://spotify23.p.rapidapi.com";

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

// var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/search/",
  params: {
    q: "Etta James",
    type: "playlists",
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
    "x-rapidapi-key": "b144d81b15msh60fe0177a58a4bap1244ffjsnbc6ee411cd30",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
