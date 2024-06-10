const bcrypt= require("bcrypt")
const userRepository= require("../repositories/userRepository")
const User= require("../models/userModel")
const jwt= require("../utils/jwt")
const crearUUID= require("../utils/crearUUID")

const signup= async (user)=>{
    const password_hash= await bcrypt.hash(user.password, 10)
    const id_user= crearUUID(user.username)
    return await userRepository.create(id_user, user.username, password_hash)
}

const signin= async (user)=>{
    const row= await userRepository.findByUsername(user.username)
    const userDB= new User(row)
    if(userDB && await bcrypt.compare(user.password, userDB.password)){
        return jwt.generateToken(userDB)
    }

    throw new Error("Username o password invalidos")
}

module.exports= {signup, signin}