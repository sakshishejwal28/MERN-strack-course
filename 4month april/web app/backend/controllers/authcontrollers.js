// register api
const jwt = require('jsonwebtoken')
const users = require("../models/Usermodel");

const register = async (req, res) => {
    try {
        const { name, city, mobileno, email, password } = req.body
        const existinguser = await users.findOne({ email: email })
        if (existinguser) {
            return res.status(400).json({ message: "email is already register" })
        }  
        const user = await users.create({
            name: name,
            city,
            mobileno,
            email,
            password
        })
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        });
        res.status(201).json({
            message: "register is sucessfully", data: user,
            token: token

        });

    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "error while register account",
            error: error.message
        })
    }
}

// login

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })
        const user = await users.findOne({ email, password })
        if (user) {
            res.status(201).json({ message: "login  is sucessfully", token: token });
        } else {
            res.status(404).json({ message: "login faild" });
        }


    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "error while  login account",
            error: error.message
        })
    }
}

module.exports = { register, login }