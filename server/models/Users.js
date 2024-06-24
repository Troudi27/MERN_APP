const {Schema , model} = require("mongoose");

const UserSchima = new Schema({
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

const UserModel = model("users",UserSchima)
module.exports = UserModel