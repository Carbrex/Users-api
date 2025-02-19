const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a first name"],
    trim: true,
    maxlength: [40, "First name cannot be more than 40 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
    trim: true,
    maxlength: [40, "Last name cannot be more than 40 characters"],
  },
  companyName: {
    type: String,
    required: [true, "Please provide a company name"],
    trim: true,
    maxlength: [40, "Company name cannot be more than 40 characters"],
  },
  age: {
    type: Number,
    required: [true, "Please provide an age"],
  },
  city: {
    type: String,
    required: [true, "Please provide a city"],
    trim: true,
    maxlength: [40, "City name cannot be more than 40 characters"],
  },
  state: {
    type: String,
    required: [true, "Please provide a state"],
    trim: true,
    maxlength: [40, "State name cannot be more than 40 characters"],
  },
  zip: {
    type: String,
    required: [true, "Please provide a zip code"],
    trim: true,
    maxlength: [15, "Zip code cannot be more than 15 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    trim: true,
    unique: true,
    maxlength: [50, "Email cannot be more than 50 characters"],
  },
  web: {
    type: String,
    required: [true, "Please provide a web address"],
    trim: true,
    maxlength: [50, "Web address cannot be more than 50 characters"],
  },
});

module.exports = mongoose.model("User", UserSchema);
