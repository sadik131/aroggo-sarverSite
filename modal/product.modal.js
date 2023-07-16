const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Name must have 3 char"]
    },
    catagory: {
        type: String,
        required: true,
        minLength: [3, "catagory name must have 3 char"]
    },
    price: {
        type: Number,
        required: true,
        min: [1, "price at list 1tk"]
    },
    discount: {
        type: Number,
        required: true,
    },
    shopPrice: {
        type: Number,
        required: true,
    },
    discrption: {
        type: String,
        required: true,
    },

})

const Product = mongoose.model("product", productSchema)

module.exports = Product