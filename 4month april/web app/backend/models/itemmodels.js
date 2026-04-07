const mongoose = require('mongoose');//labirary -connect mongodb database

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
 const Items = mongoose.model("Items",itemsSchema)
 module.exports = Items