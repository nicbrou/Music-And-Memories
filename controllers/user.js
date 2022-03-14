// const { User } = require("../models/User");

// exports.user_create_get = (req, res) => {
//   res.render("user/add", { title: "Create New Account" });
// };

// HTTP POST - user

// exports.user_create_post = (req, res) => {
//   console.log(req.body);
//   let user = new User(req.body);

//   //  Save User
//   user
//     .save()
//     .then(() => {
//       res.render("user/profile");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send("Error...");
//     });
// };

// // HTTP GET - ARTICLE INDEX

// exports.article_index_get = (req, res) => {
//   User.find().then((users) => {
//     res.render("user/index", { users: users });
//   });
// };
