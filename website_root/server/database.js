const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/buddersBakery', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database');
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ 
    flavor: { type: mongoose.Schema.Types.ObjectId, ref: 'Flavor' },
    quantity: Number
  }],
  total: Number,
  date: { type: Date, default: Date.now }
});

const FlavorSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number
});

const User = mongoose.model('User', UserSchema);
const Order = mongoose.model('Order', OrderSchema);
const Flavor = mongoose.model('Flavor', FlavorSchema);

module.exports = { User, Order, Flavor };