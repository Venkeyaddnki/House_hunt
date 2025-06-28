const mongoose = require('mongoose');

const renterSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'renter' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Renter', renterSchema);
