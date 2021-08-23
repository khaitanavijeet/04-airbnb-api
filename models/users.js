const mongoose = require('mongoose')
usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required']
  },
  avatar: {
    type: String
  },
  location: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  houses:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'houses'
  }
})

module.exports = mongoose.model('users', usersSchema)
