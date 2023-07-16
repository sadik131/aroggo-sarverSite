const Product = require("../modal/product.modal")

exports.postService = async (data) => {
    const result = await Product.create(data)
    return result
}