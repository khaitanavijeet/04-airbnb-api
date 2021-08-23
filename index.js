// Packages
const express = require('express')
const cors = require('cors')
const env =require('dotenv').config()

// Server

const app = express()
const database = require('./database')

// Middleware

app.use(cors())

// Routes

app.use('/houses', require('./controllers/houses'))
app.use('/types', require('./controllers/types'))
app.use('/amenities', require('./controllers/amenities'))
app.use('/reviews', require('./controllers/reviews'))

// Start
let port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Ready on port ${port}`)
})

module.exports = app
