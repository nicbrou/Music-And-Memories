// APIs for Authentication
// HTTP GET - TO LOAD THE SIGN UP FORM
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const salt = 10;

exports.auth_signup_get = (req, res) => {
  res.render("auth/signup");
};

// HTTP POST - SIGN UP - to post the data
exports.auth_signup_post = (req, res) => {
  let user = new User(req.body);
  console.log(req.body);
  let hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash);
  user.password = hash;
  user
    .save()
    .then(() => {
      res.redirect("/auth/signin");
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.send("Duplicate Email.");
      }
      console.log(err);
    });
};

// HTTP GET - Signin - to load the signin form
exports.auth_signin_get = (req, res) => {
  res.render("auth/signin");
};

// http post - SIGNIN - TO POST THE data
exports.auth_signin_post = passport.authenticate("local", {
  successRedirect: "/user/profile",
  failureRedirect: "/auth/signin",
  successFlash: "You signed in successfully!",
  failureFlash: "Invalid username or password!",
});

// HTTP GET - Logout - to logout the user
exports.auth_logout_get = (req, res) => {
  req.logout();
  req.flash("success", "You have logged out.");
  res.redirect("/auth/signin");
};
