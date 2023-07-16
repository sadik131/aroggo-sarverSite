const User = require("../modal/user.modal")

exports.findSirvice = async () => {
    const result = await User.find({})
    return result
}
exports.createSirvice = async (user) => {
    const result = await User.create(user)
    return result
}