const { User } = require("../models/User");
const { Music } = require("../models/Music");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const { redirect } = require("statuses");

mongoose.connect(process.env.mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.saved_create_get = async (req, res) => {
  let currentUser = await User.findById(req.user.id);
  console.log(currentUser);
  res.render("user/saved", { currentUser });
};

exports.saved_create_put = async (req, res) => {
  let user = await User.findById(req.user.id);
  console.log(user);
  let favourite = await Music.findById(req.params.id);
  console.log(favourite);
  delete favourite._id;
  favourite.comment = "";
  user.favourites.push(favourite);
  await user.save();
  res.redirect("/user/saved");
};

exports.saved_create_delete = async (req, res) => {
  let user = await User.findById(req.user.id);
  let favouriteIndex = user.favourites.findIndex((favourite) => {
    return req.params.id == favourite._id;
  });
  console.log(favouriteIndex);
  user.favourites.splice(favouriteIndex, 1);
  await user.save();
  res.redirect("/user/saved");
};

exports.saved_addNote_post = async (req, res) => {
  let user = await User.findById(req.user.id);
  let favouriteIndex = user.favourites.findIndex((favourite) => {
    return req.params.id == favourite._id;
  });
  user.favourites[favouriteIndex].comment = req.body.comment;
  await user.save();
  res.redirect("/user/saved");
};

exports.saved_addNote_delete = async (req, res) => {
  let user = await User.findById(req.user.id);
  let favouriteIndex = user.favourites.findIndex((favourite) => {
    return req.params.id == favourite._id;
  });
  user.favourites[favouriteIndex].comment = "";
  await user.save();
  res.redirect("/user/saved");
};
