// const { Profile } = require("../models/Profile");
const { Music } = require("../models/Music");

exports.profile_create_get = async (req, res) => {
  console.log("user", req.user);
  if (req.user) {
    let playlists = await Music.find({
      $or: [
        { playlists: req.user.musicPreferences },
        { playlists: { $regex: `.*${req.user.yearOfBirth}.*` } },
      ],
    });
    console.log(playlists);
    res.render("user/profile", { playlists });
  } else {
    res.redirect("/auth/signin");
  }
};

exports.profile_create_post = (req, res) => {
  res.render("user/profile");
};

// if(req.user.yearOfBirth >= 1900 && <= 1940) {
// let req.user.yearOfBirth = firstGen;
//   let playlists = await Music.find({Music.name})
//   if({Music.name == firstGen}) {
// res.render("user/profile", {Music.name})
// }
// })

// if(req.user.yearOfBirth >= 1941 && <= 1955) {
// let req.user.yearOfBirth = secondGen;
//   let playlists = await Music.find({Music.name})
//   if({Music.name == secondGen}) {
// res.render("user/profile", {Music.name})
// }
// })
