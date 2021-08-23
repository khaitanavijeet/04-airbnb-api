const mongoose = require('mongoose')
const env = require('dotenv').config()
let database = process.env.MONGODB_URL || `mongodb+srv://sonika25:Brooklyn99*@cluster0.jhqbm.mongodb.net/aibnb?retryWrites=true&w=majority`
mongoose.connect(database, { useNewUrlParser: true }, err => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})
module.exports = mongoose
