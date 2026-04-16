const mongoose = require('mongoose');//labirary -connect mongodb database

//schema-model-database table structure
//value store database -structure
//format
 const UserSchema = new mongoose.Schema({
    name: String,
    city: String,
    mobileno: Number,
    email: String,
    password: String ,
    
 })
 const users = mongoose.model("users",UserSchema)

 module.exports = users
