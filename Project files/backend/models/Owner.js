const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isApproved: { type: Boolean, default: false },
  role: { type: String, default: 'owner' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Owner', ownerSchema);
