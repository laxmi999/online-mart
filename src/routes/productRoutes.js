const express = require('express');
const router = express.Router();
const Product = require('../controllers/productController');

router.post('/add-product', Product.addProduct);
router.post('/add-product-category', Product.addCategoryToProduct);

module.exports = router;
