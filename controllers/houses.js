const Houses = require('../models/houses')
const router = require('express').Router()
router.get('/', (req, res) => {
	Houses.find({})
		.populate('type')
		.then(houses => {
			for(let i =0 ; i<houses.length;i++){
 				houses[i].image = houses[i].images[0]
			}
			res.send(houses)

		})
		.catch(err => {
			res.send(err)
		})
})
//delte
router.delete('/:id',(req,res)=>{
  Houses.findByIdAndDelete({_id : req.params.id})
    .then(data => {res.send(data)})
})

// Create route for single house

router.get('/:id', (req, res) => {
	Houses.find({_id : req.params.id})
	.populate("type")
	.populate("amenities")
		.then(house => {
			let finArr =[]
			Object.keys(house[0].toJSON()).map(key=>{
				if(key== 'images' || key == 'type' ||key == 'host' || key == "amenities" || key == 'rating' || key == 'reviews' || key == 'price' || key == 'bedrooms' ){
					let key1=[]
					key1.push(key)
					key1.push(house[0][key])
					finArr.push(key1)
				}
			})
			const entries = new Map(finArr);
			const objo = Object.fromEntries(entries);
			res.send(house[0])

		})
		.catch(err => {
			res.send(err)
		})
})

module.exports = router
