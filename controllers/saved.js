// const dotenv = require("dotenv");
// dotenv.config();
const { Saved } = require("../models/Saved");
// const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.mongoDBURL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("MongoDB connected successfully!");
//   }
// );

exports.saved_create_get = (req, res) => {
  res.render("user/saved");
};

// exports.saved_create_post = (req, res) => {
//   res.render("user/saved");
// };
