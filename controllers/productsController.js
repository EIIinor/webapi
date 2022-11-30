const express = require('express')
const controller = express.Router()
let products = require('../data/simulated_database')

controller.post('/', (request, response) => {
    let product = {
        id: (products[products.length -1])?.id > 0 ? (products[products.length -1])?.id +1 :1,
        articleNumber: request.body.articleNumber,
        name: request.body.name,
        price: request.body.price,
        category: request.body.category,
        imageUrl: request.body.imageUrl,
        quantity: request.body.quantity
    }

    products.push(product)
    response.status(201).json(product)
})

controller.get('/', (request, response) => {
    response.status(200).json(products)
})


controller.get('/:id', (request, response) => {
    response.status(200).json(products)
})


module.exports = controller