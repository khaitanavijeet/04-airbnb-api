const Amenities = require('../models/amenities')
const router = require('express').Router()

router.get('/', (req, res) => {
  Amenities.find({})
    .then(data => {res.send(data)})
})

module.exports = router
