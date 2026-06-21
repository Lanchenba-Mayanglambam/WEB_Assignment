const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    FoodName: String,
    Category: String,
    Price: Number,
    Quantity: Number,
    Rating: Number
});

module.exports = mongoose.model("Food", menuSchema, "Food");