const express = require('express')
const router = express.Router()

const  { 
    getPurchases,
    getPurchase,
    createPurchases
} = require('../controllers/purchases.js')

router.get('/', getPurchases)

router.get('/:purchasesID', getPurchase)

router.post('/', createPurchases) 

module.exports = router