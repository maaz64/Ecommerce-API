const Product = require("../Models/Product");


module.exports.home=(req,res)=>{

  return res.redirect('/products');
  
}

// function to create the product in database
module.exports.createProduct = async (req, res) => {
  try {
    // destructuring the input
    const { name, quantity } = req.body;

    // checking is input field is empty or not
    if (!name || !quantity) {
      return res.status(400).json({
        message: "product and quantity input can't be empty",
        data: {},
      });
    }
    // creating product in database
    const product = await Product.create({
      name,
      quantity,
    });

    // if product is created successfully then we will return the product
    if (product) {
      return res.status(200).json({
        message: "Product created successfully",
        data: { product },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while creating product",
      data: {},
      error,
    });
  }
};

// function to get all products from database
module.exports.getProducts = async (req, res) => {
  try {
    // finding all the products from database
    const products = await Product.find({});

    if (products.length === 0) {
      return res.status(200).json({
        message: "No Product Availaible",
        data: { products },
      });
    }

    // if products is there then return products array as data
    if (products) {
      return res.status(200).json({
        message: "Here is all your products",
        data: { products },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching the products",
      data: {},
      error,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    // getting the id from params
    const id = req.params.id;

    // deleting the products from database
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (deletedProduct) {
      return res.status(200).json({
        message: "product deleted",
        data: { deletedProduct },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while deleting the product",
      data: {},
      error,
    });
  }
};

module.exports.updateQuantity = async(req, res) => {
  try {

    // getting the id from params
    const id = req.params.id;

    // getting the quantity from query
    const quantity = req.query.number;

    // checking if the product with provided id exist in database or not
    const product = await Product.findById(id);
    
    if(!product){
        return res.status(404).json({
            message:"No such products in database",
            data:{}
        })
    }
    // updating the product
    const updatedProduct = await Product.findByIdAndUpdate(id,{quantity},{new:true})

    if(updatedProduct){
        return res.status(200).json({
            message: "updated successfully",
            data: {updatedProduct},
          });
    }

 
  } catch (error) {
    return res.status(500).json({
        message: "Something went wrong while updating the product",
        data: {},
        error,
      });
  }
};
