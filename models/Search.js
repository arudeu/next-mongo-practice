const mongoose = require("mongoose");

const SearchSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    maxlength: [20, "Name must be less than 20 characters"],
  },
  productName: {
    type: String,
    required: true,
    maxlength: [50, "Name must be less than 50 characters"],
  },
  productDescription: {
    type: String,
    required: true,
    maxlength: [500, "Name must be less than 50 characters"],
  },
});

module.exports =
  mongoose.models.Search || mongoose.model("Search", SearchSchema);
