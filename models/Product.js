const mongoose = require('mongoose')


const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    description: String,
    imgUrl: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
})

const Product = mongoose.model('Product', ProductSchema)


{

    // Product.create({
    //     name: 'Product 1',
    //     description: 'Product 1 description',
    //     imgUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    // })



    // Product.find({}, (err, res) => {
    //     console.log(res)
    // })

    // Product.findById("6279e39270e7ec599f993b04", (err, res) => {
    //     console.log(res)
    // })



    // const id = "6279d9501e43e37b797db5b8"
    // Product.findByIdAndUpdate(
    //     id,
    //     {
    //         name: 'Product 1',
    //         description: 'Product 1 description updated second time',
    //     },
    //     {
    //         new: true
    //     },
    //     (err, data) => {
    //         console.log(data)
    //     }
    // )



    // const id = "6279d9501e43e37b797db5b8"
    // Product.findByIdAndDelete(
    //     id,
    //     (err, data) => {
    //         console.log("Product is deleted")
    //     }
    // )

}

module.exports = Product