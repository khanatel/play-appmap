const products = require('../product-data.js')
const axios = require('axios')

const getProducts = ((req, res) => {
    
    for(let i = 0; i < 3; i++) {
        axios.get('https://2b1bffd1-9e52-4397-a263-4499889a8543.mock.pstmn.io/menus')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        });    
    }
    res.json(products)
})

const getProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)
    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

const createProduct = ((req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

const updateProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }

    products[index] = updatedProduct
    res.status(200).json('Product updated')
})

const deleteProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    products.splice(index,1)
    res.status(200).json('Product deleted')
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}