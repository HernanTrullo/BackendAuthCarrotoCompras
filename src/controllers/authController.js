const User = require("../models/userModel")
const authService= require("../services/authService")

const signup= async (req, res)=>{
    try {
        const user= await authService.signup(new User(req.body))
        res.status(201).json(new User(user))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const signin= async (req, res)=>{
    try {
        const token= await authService.signin(new User(req.body))
        res.status(200).json(token)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports= {signup, signin}