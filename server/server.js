const express = require ("express")
const app = express()

const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://houssemtroudi97:IbANy050QJG8jvM9@troudi27.04iv1ui.mongodb.net/mern_app?retryWrites=true&w=majority&appName=Troudi27")

const UserModel = require("./models/Users")


app.get("/", async (req , res) => {
  const Users = await UserModel.find();
  res.json(Users)
})

app.listen("3001", () =>{
    console.log("server works")
})