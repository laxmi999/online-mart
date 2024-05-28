const express = require('express');
const db = require('./src/config/db.config');

const app = express();
const PORT = 8080;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Live on http://localhost:${PORT}`);
  } else {
    console.log(err);
  }
});

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hello',
  });
});
