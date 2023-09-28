const express = require('express');
const router = express.Router();

const products = require('./products');
const productController = require('../Controller/productController');

router.use('/products',products);
router.get('/',productController.home);

module.exports = router;