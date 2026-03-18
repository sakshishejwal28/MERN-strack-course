// node.js
//express.js
// Db mongodb

// API list
// 1 API create item- grt dat Value from front and (item details) and store into DB
// 2 API update item -get item details from front and which item we need to update
// 3 API delete item - get item delete from front end and lete this record from database
// 4 API get all records -grt all records from DB and show to ui front end



// console.log("hello node.js")
// const getdata=()=>{

// }
// function getadata(){

// }

console.log("hello node,js project start")

const express = require('express') //node js fremwork
const app = express() //app variable- store express function
 
const cors = require("cors")//liberary -solve cors error
const mongoose = require('mongoose');//labirary -connect mongodb database
app.use(express.json())//convet all data into json formate
app.use(cors())
//DB CONNECTION
mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("mongodb connected")).catch((error) => console.log(error))

//schema-model-database table structure
//value store database -structure
//format
 const itemsSchema = new mongoose.Schema({
    name: String,
    decription: String,
    sellingPrice: Number,
    PurchasePrice: Number,
    quantity:Number,
    unit:String
 })
 const Items = new mongoose.model("Items",itemsSchema)


 //create API
 app.post("/api/create-item", async (req , res) => {
   try {
    const {name, decription, sellingPrice , PurchasePrice, quantity, unit} = req.body

    const saveItem = new Items(
      {   
      name,
      decription,
       sellingPrice,
       PurchasePrice,
         quantity,
          unit
      }
    )

     await saveItem.save()
    res.status(201).json({message:"Item created", data : saveItem});

   } catch (error) {
    console.log(error)
   }
 })


 //update API
app.put("/api/update-item", async (req, res) =>{
  try{

  }catch (error) {
console.log()
  }
})

  //delete API 
 app.delete("/api/delete-item/:id", async (req , res) => {
  try {
    const { id ,} = req.params
    const deleteItem = await Items.findByIdAndDelete(id )
    res.status(200).json({message:" item deleted",  deleteItem:  deleteItem   });
  } catch (error) {
    console.log(error)
  }
 })
 
 //get all API

 app.get("/api/get-all-item", async (req, res) =>{
  try{
const items = await Items.find()
 res.status(200).json({message:"get all item", data :items  });
  }catch (error) {
console.log(error)
  }
}) 

 //helth API
 app.get("/helth", (req , res) => {
  console.log("ppp")
   res.status(200).json({ message: "server is running"})
 })


 //server started
 const PORT = 9090


 app.listen(PORT ,  () => {
   console.log("server started" , PORT)
 }) 