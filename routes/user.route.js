const express = require("express")
const userControler = require("../controler/user.controler")

const route = express.Router()

// all product sarvice
route.route("/")
.get(userControler.getUser)
.post(userControler.creatNewUser)



module.exports = route