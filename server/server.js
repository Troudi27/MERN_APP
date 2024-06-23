//CREATE SERVE
const express = require ("express")
const app = express()
const _PORT =3001;
const cors = require ("cors")
app.use(cors())
app.use(express.json());


//CONNECT TO DB
const username = process.env.USERNAME , 
      password = process.env.PASSWORD ,
      database = process.env.DATABASE;
const mongoose = require ("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@troudi27.04iv1ui.mongodb.net/${database}?retryWrites=true&w=majority&appName=Troudi27`)


//IMPORT USERMODEL
const UserModel = require("./models/Users")


//GET Request
app.get("/users", async (req , res) => {
  const Users = await UserModel.find();
  res.json(Users)
})

//Create User
app.post("/createUser", async (req , res) => {
  const newUser = new UserModel(req.body);
  await newUser.save();
  res.json(req.body)
})

app.listen(_PORT, () =>{
    console.log("server works")
})


