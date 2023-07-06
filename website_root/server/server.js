const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./user');
const checkout = require('./checkout');
const database = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', user);
app.use('/checkout', checkout);

database.connect();

app.listen(3000, function () {
  console.log('Budder\'s Bakery server is listening on port 3000');
});