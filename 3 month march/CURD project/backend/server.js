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
 
const mongoose = require('mongoose');//labirary -connect mongodb database
app.use(express.json)//convet all data into json formate
//DB CONNECTION
mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("mongodb connected")).catch((error) => console.log(error))

//schema-model-database table structure
//value store database -structure
//format
 const itemsSchema = new mongoose.Schema({
    name:String,
    decription:String,
    sellingPrrice: Number
 })
 const items = new mongoose.model("items",itemsSchema)