const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minLength:[3,"Name must have 3 char"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const User = mongoose.model("User",userSchema)

module.exports = User