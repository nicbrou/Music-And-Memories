// Dependencies
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [3, "Username must be more than 3 characters"],
  },
  emailAddress: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Username must be more than 6 characters"],
  },
  musicPreferences: {
    type: String,
  },
  yearOfBirth: {
    type: Number,
  },
  countryOfYouth: {
    type: String,
  },
});

userSchema.methods.verifyPassword = function (password) {
  console.log(password);
  console.log(this.password);
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
