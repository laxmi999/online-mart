const express = require('express');
const router = express.Router();
const Product = require('../controllers/productController');

router.post('/add-product', Product.addProduct);

module.exports = router;
