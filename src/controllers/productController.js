const db = require('../models');
const User = db.User;
const Merchant = db.Merchant;
const Product = db.Product;

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
        res.json({ message: 'Product added sucessfully!' });
      } else {
        res.json({ message: 'You are not a merchant.' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
