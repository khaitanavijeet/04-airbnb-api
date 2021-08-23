const mongoose = require('mongoose')
     Houses = require('./houses')
let amenitiesSchema = mongoose.Schema(
  [
    {
      name: {
        type: String,
        required: [true, 'name is required']
      },
      icon: {
        type: String,
        required: [true, 'icon is required']
      },
      houses:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'houses'
      }
    }
  ]
)
module.exports = mongoose.model('amenities', amenitiesSchema)
