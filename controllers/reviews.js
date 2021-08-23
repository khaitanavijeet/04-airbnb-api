const router = require('express').Router()
const Reviews = require('../models/reviews')

router.get('/:house', (req, res) => {
  Reviews.find({house: req.params.house})
    .then(data => {
      res.send(data)
    })
  })

module.exports = router
