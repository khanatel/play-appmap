const express = require('express')
const router = express.Router()

const  { 
    getPurchases,
    createPurchases
} = require('../controllers/purchases.js')

router.get('/', getPurchases)

router.post('/', createPurchases) 

module.exports = router
