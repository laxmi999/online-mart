const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
require('dotenv').config();
const auth = require('../middlewares/auth');
// const Op = db.Sequelize.Op;

// const users = await User.findAll();

module.exports = {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const hashedPassword = bcrypt.hash(password, process.env.SALT);
      const user = await User.create({
        email,
        encryptedPassword: hashedPassword,
      });
      const token = auth.generateToken(user);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.encryptedPassword))) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      const token = auth.generateToken(user);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async userInfo(req, res) {
    try {
      const currentUser = req.user;
      const { username, contactNo, fullName } = req.body;
      const user = await User.findOne({ where: { id: currentUser.id } });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      // return res.json(user);
      user.update({ username, contactNo, fullName });
      return res
        .status(200)
        .json({ message: 'User info updated successfully!' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Something went wrong!' });
    }
  },
};
