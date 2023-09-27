const express = require('express');
const router = express.Router();

const productController = require('../Controller/productController');

router.get('/',productController.getProducts);
router.post('/create',productController.createProduct);
router.post('/:id/update_quantity',productController.updateQuantity);
router.delete('/:id',productController.deleteProduct);

module.exports = router;