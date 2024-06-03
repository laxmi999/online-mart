const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/register', User.register);
router.post('/login', User.login);
router.post('/user-info', auth.verifyToken, User.userInfo);

module.exports = router;
