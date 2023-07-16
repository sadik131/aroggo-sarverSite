const productService = require("../sarvice/product.sarvice")

exports.getProduct = async(req, res) =>{
    // const 
}


exports.PostNewProduct = async(req, res) =>{
    try {
        const doc = req.body
        const result = await productService.postService(doc)
        res.status(200).json({
            status: "success",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message,
            status: "fail",
            message:"Couldn't save Product"
        })
    }
}