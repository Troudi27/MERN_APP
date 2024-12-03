const mongoose = require("mongoose");

const UserSchima = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
    },
})

const UserModel = mongoose.model("users",UserSchima)
module.exports = UserModel