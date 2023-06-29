const purchases = require('../purchase-data.js')
const axios = require('axios')

const getPurchases = ((req, res) => {
    res.json(purchases)
})

const getPurchase = ((req, res) => {
    const id = Number(req.params.purchasesID)
    const purchase = purchases.find(purchases => purchases.id === id)
    if (!purchase) {
        return res.status(404).send('Purchase not found')
    }
    res.json(purchase)
})

const createPurchases = ((req, res) => {    
    const newPurchase = {
        id: purchases.length + 1,
        customer_name: req.body.customer_name,
        total_price: req.body.total_price,
        product_id: req.body.product_id
    }
    axios.get(`http://localhost:5000/api/products/${newPurchase.product_id}`)
    .then(response => {
        purchases.push(newPurchase)
        res.status(201).json(newPurchase)
    })
    .catch(error => {
        console.log(error)
        return res.status(400).send('Product id not found')
    });        
})

module.exports = {
    getPurchases,
    getPurchase,
    createPurchases
}