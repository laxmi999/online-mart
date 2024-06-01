const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/config/db.config');

const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Live on http://localhost:${PORT}`);
  } else {
    console.log(err);
  }
});

db.authenticate()
  .then(() => console.log('Successfully connected to the database!'))
  .catch((error) => console.log('Failed to connect the database:', error));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome!!',
  });
});
