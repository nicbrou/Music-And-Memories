const { User } = require("../models/User");
const { Music } = require("../models/Music");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const { redirect } = require("statuses");

mongoose.connect(
  process.env.mongoDBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB connected successfully!");
  }
);

exports.saved_create_get = async (req, res) => {
  let currentUser = await User.findById(req.user.id).populate("favourites");
  console.log(currentUser);

  res.render("user/saved", { currentUser });

  // playlists //user instead of playlists
  //   // below should be on the front end using a for loop
  //   .findByID(req.query.id);
};

exports.saved_create_put = async (req, res) => {
  let user = await User.findById(req.user.id);
  console.log(user);
  let favourite = await Music.findById(req.params.id);
  console.log(favourite);
  user.favourites.push(favourite._id);
  await user.save();
  res.redirect("/user/saved");
}; //- this function is the update of the user model with object id of playlist

// put request that will push the id of the playlist into the favourites array which is in user model
// exports.saved_delete_get = async (req, res) => {
//   let currentUser = await User.findById(req.user.id).populate("favourites");
//   console.log(currentUser);
//   res.render("user/saved", { currentUser });
// };

exports.saved_create_delete = async (req, res) => {
  let user = await User.findById(req.user.id);
  let favouriteIndex = await user.favourites.findIndex((favourite) => {
    req.params.id === favourite._id;
  });
  user.favourites.splice(favouriteIndex, 1);
  user.save();
  res.redirect("/user/saved");
};

exports.saved_addNote_get = (req, res) => {
  res.redirect("/user/saved");
};

exports.saved_addNote_post = async (req, res) => {
  let user = await User.findById(req.user.id);
  user.notes.push(req.body);
  user.save();
  res.redirect("/user/saved");
};
