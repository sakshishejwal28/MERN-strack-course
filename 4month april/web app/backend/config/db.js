const mongoose = require('mongoose');//labirary -connect mongodb database

const connectDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("mongodb connected")).catch((error) => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

module.exports={connectDB}