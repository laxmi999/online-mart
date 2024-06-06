const db = require('../models');
const Merchant = db.Merchant;
const User = db.User;

module.exports = {
  async becomeMerchant(req, res) {
    try {
      const currentUser = req.user;
      const { businessName, businessContact, businessEmail, address } =
        req.body;
      await Merchant.create({
        userId: userId,
        businessName,
        businessContact,
        businessEmail,
        address,
      });
      const user = await User.findOne({ where: { id: currentUser.id } });
      user.update({ isMerchant: true });
      res.status(201).json({ message: "🎉You've become a merchant!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
