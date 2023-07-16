const express = require('express');
const app = express()
const cors = require('cors');


// meddelwar
app.use(express.json())
app.use(cors())

// router
const userRouter = require("./routes/user.route")
const productRouter = require("./routes/product.route")

app.use("/api/v1/user", userRouter)
app.use("/api/v1/product", productRouter)

app.get("/", (req, res) => {
    res.send("Route is running")
})




module.exports = app;