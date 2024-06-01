const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Op = db.Sequelize.Op;

// const users = await User.findAll();

module.exports = {
  async register(req, res) {
    try {
      const saltRounds = 10;
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        email,
        encryptedPassword: hashedPassword,
      });
      return res.status(201).json(user);
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
      console.log(user.id, user.email);
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // async userInfo(res, req) {
  //   try {
  //     const { id } = req.body;
  //     const user = User.findOne({});
  //   } catch (error) {}
  // },
};
