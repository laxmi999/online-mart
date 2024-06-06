const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/config/db.config');

const userRoutes = require('./src/routes/userRoutes');
const auth = require('./src/middlewares/auth');
const categoryRoutes = require('./src/routes/categoryRoutes');
const productRoutes = require('./src/routes/productRoutes');
const merchantRoutes = require('./src/routes/merchantRoutes');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Live on http://localhost:${PORT}`);
    db.authenticate()
      .then(() => console.log('Successfully connected to the database!'))
      .catch((error) => console.log('Failed to connect the database:', error));
  } else {
    console.log(err);
  }
});

// db.authenticate()
//   .then(() => console.log('Successfully connected to the database!'))
//   .catch((error) => console.log('Failed to connect the database:', error));

app.use('/users', userRoutes);
app.use(auth.verifyToken);
app.use('/merchants', merchantRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome!!',
  });
});
