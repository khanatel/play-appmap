const express = require('express')
const app = express()
const products_routes = require('./routes/products.js')
const purchases_routes = require('./routes/purchases.js')

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/products', products_routes)
app.use('/api/purchases', purchases_routes)