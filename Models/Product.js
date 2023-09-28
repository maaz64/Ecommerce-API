const mongoose = require("mongoose");

// creating Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});


const Product = mongoose.model("Product", productSchema);

// exporting the Product Schema 
module.exports = Product;
