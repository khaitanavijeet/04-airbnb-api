const mongoose = require('mongoose')
      Houses = require('./houses')

module.exports = mongoose.model('types', ({
  name : {
    type : String,
    required : [true , 'name is required']
  }
}), "types"
)
