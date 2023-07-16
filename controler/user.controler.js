const userSarvice = require("../sarvice/user.sarvice")

exports.getUser = async(req, res) => {
    try {
    const result = await userSarvice.findSirvice()
    res.status(200).json({
        status: "success",
        result: result
    })
} catch (error) {
    res.status(400).json({
        error:error.message,
        status: "fail",
        message:"Couldn't get User"
    })
}
}


exports.creatNewUser = async (req, res) => {
    try {
        const user = req.body
        const result = await userSarvice.createSirvice(user)
        res.status(200).json({
            status: "success",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message,
            status: "fail",
            message:"Couldn't create Account"
        })
    }
}