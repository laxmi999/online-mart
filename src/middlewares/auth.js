const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '3h',
    }
  );
};

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied.' });
  }
  try {
    const d_token = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY);
    req.user = d_token;
    next();
  } catch (error) {
    console.log(error);
  }
};
