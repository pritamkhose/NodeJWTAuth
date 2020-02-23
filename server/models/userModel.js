const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LastLoginSchema = new Schema({
  accessToken: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true
  }})

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
  },
  accessToken: {
    type: String
  },
  lastLogin: [LastLoginSchema]
})

const User = mongoose.model('user', UserSchema)

module.exports = User;