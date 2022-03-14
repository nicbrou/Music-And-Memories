const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
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

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile };
