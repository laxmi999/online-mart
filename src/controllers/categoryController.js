const db = require('../models');
const Category = db.Category;
const User = db.User;

module.exports = {
  async allCategories(req, res) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async addCategory(req, res) {
    try {
      const currentUser = req.user;
      const user = await User.findOne({ where: { id: currentUser.id } });
      console.log(user);
      const { categoryName } = req.body;
      if (user.isAdmin) {
        const category = await Category.create({
          categoryName,
        });
        return res
          .status(201)
          .json({ message: 'New category added successfully!' });
      } else {
        return res.status(400).json({ message: "You don't have permission." });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
