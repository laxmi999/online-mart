const db = require('../models');
const User = db.User;
const Merchant = db.Merchant;
const Product = db.Product;
const Category = db.Category;

module.exports = {
  async addProduct(req, res) {
    try {
      const currentUser = req.user;
      const user = await User.findOne({ where: { id: currentUser.id } });
      const { productName, description, price, category, stock } = req.body;
      if (user.isMerchant) {
        const merchant = await Merchant.findOne({
          where: { userId: currentUser.id },
        });
        const merId = merchant.id;
        await Product.create({
          productName,
          description,
          price,
          merchantId: merId,
          category,
          stock,
        });
        return res.json({ message: 'Product added sucessfully!' });
      } else {
        return res.json({ message: 'You are not a merchant.' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async addCategoryToProduct(req, res) {
    try {
      const currentUser = req.user;
      const user = await User.findOne({ where: { id: currentUser.id } });
      const { productId, categoryId } = req.body;
      if (user.isMerchant) {
        const merchant = await Merchant.findOne({
          where: { userId: currentUser.id },
        });
        const merchantId = merchant.id;
        const product = await Product.findByPk(productId);
        if (product.merchantId === merchantId) {
          const category = await Category.findByPk(categoryId);
          await product.addCategory(category);
        } else {
          return res
            .status(400)
            .json({ message: 'You do not have permission.' });
        }
      } else {
        return res.status(400).json({ message: 'You are not a merchant.' });
      }
      return res.status(200).json({ message: 'New category added.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
