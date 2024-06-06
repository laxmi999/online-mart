const express = require('express');
const router = express.Router();
const Category = require('../controllers/categoryController');

router.get('/', Category.allCategories);
router.post('/add-category', Category.addCategory);

module.exports = router;
