const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  role_id: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String
  },
})

module.exports = mongoose.model('user', userSchema)