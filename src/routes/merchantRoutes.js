const express = require('express');
const router = express.Router();
const Merchant = require('../controllers/merchantController');

router.post('/become-merchant', Merchant.becomeMerchant);

module.exports = router;
