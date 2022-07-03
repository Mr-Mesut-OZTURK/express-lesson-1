const express = require('express');
const path = require('path');
const ejs = require('ejs');

const mongoose = require('mongoose')

const Product = require('./models/Product')

const app = express();

mongoose.connect("mongodb://localhost/pcat-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// MIDDLEWARES 
app.use(express.static(path.join(__dirname, 'public')))  // static files
app.use(express.urlencoded({ extended: true })) // for read request body
app.use(express.json())

// template engine
app.set('view engine', 'ejs');
app.set('layout', 'partials/_main')



// routes
app.get('/', (req, res) => {
    res.render("index")
})
app.get('/products', (req, res) => {
    res.render("products")
})





app.get('/add-product', async (req, res) => {

    const products = await Product.find({})
    res.render("product/add-product", { products })
})
app.post('/add-product', async (req, res) => {
    // console.log(req.body)

    await Product.create(req.body)
    res.redirect("/add-product")
})



app.get('/product-detail/:id', async (req, res) => {

    console.log(req.params.id);
    const id = req.params.id
    const product = await Product.findById(req.params.id)

    console.log(product);

    res.render("product/product-detail", { product })
})





app.get('/single-product', (req, res) => {
    res.render("single-product")
})
app.get('/about', (req, res) => {
    res.render("about")
})
app.get('/contact', (req, res) => {
    res.render("contact")
})




const port = 3000
app.listen(port, (req, res) => {
    console.log(`sunucu port ${port} ta çalışmaya başladı...`)
})