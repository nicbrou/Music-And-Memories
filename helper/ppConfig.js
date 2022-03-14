const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const { User } = require("../models/User");

// serialize User
// Saing the data to the session
// Id is the unique identifier
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize User
// Reading the info from the database according to the user id
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "emailAddress",
      passwordField: "password",
    },
    function (emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

module.exports = passport;
