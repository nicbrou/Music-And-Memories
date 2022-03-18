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
