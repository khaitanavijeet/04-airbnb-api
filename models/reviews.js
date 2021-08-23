const mongoose = require('mongoose')
var reviewSchema = mongoose.Schema([
  {
    author: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'users'
    },
    rating: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      required: [true, 'content is required']
    },
    house: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'houses'
    }
  }
])
module.exports = mongoose.model('reviews', reviewSchema)
