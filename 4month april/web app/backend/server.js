// node.js
//express.js
// Db mongodb

// API list
// 1 API create item- grt dat Value from front and (item details) and store into DB
// 2 API update item -get item details from front and which item we need to update
// 3 API delete item - get item delete from front end and lete this record from database
// 4 API get all records -grt all records from DB and show to ui front end


require('dotenv').config() // or import 'dotenv/config' if you're using ES6
console.log(process.env.PORT,"===>") // remove this after you've confirmed it is working
// console.log("hello node.js")
// const getdata=()=>{

// }
// function getadata(){

// }

const express = require('express') //node js fremwork
const app = express() //app variable- store express function
 
const cors = require("cors")//liberary -solve cors error
const { connectDB } = require('./config/db');
const {addItem,editItem,deleteItem,getAllItems } = require("./controllers/itemcontroller")
app.use(express.json())//convet all data into json formate
app.use(cors())
//DB CONNECTION
connectDB()


 //create API
 app.post("/api/create-item",addItem )


 //update API
app.put("/api/update-item",  editItem)

  //delete API 
 app.delete("/api/delete-item/:id",  deleteItem)
 
 //get all API

 app.get("/api/get-all-item", getAllItems) 

 //helth API
 app.get("/helth", (req , res) => {
  console.log("ppp")
   res.status(200).json({ message: "server is running"})
 })


 //server started
 const PORT = process.env.PORT ||9000


 app.listen(PORT ,  () => {
   console.log( `server is running ${PORT}`)
 }) 