const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const noteSchema = new mongoose.Schema(
  {
    comment: String,
  },
  {
    timestamps: true,
  }
);

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
    default: "JAZZ",
    enum: ["JAZZ", "CLASSICAL", "ROCK", "POP", "COUNTRY", "FOLK"],
  },
  yearOfBirth: {
    type: Number,
    min: 1900,
    max: 2022,
  },
  countryOfYouth: {
    type: String,
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Music",
    },
  ],
  notes: [noteSchema],
});

userSchema.methods.verifyPassword = function (password) {
  console.log(password);
  console.log(this.password);
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
