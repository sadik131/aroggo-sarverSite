const express = require("express")
const prodcutControler = require("../controler/product.controler")

const route = express.Router()

// all product sarvice
route.route("/")
.get(prodcutControler.getProduct)
.post(prodcutControler.PostNewProduct)



module.exports = route