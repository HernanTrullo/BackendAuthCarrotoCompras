const jwt= require("jsonwebtoken")
const envConfig= require("../config/envConfig")

const generateToken= (userDB)=>{
    const payload= {
        sub: userDB.id_user,
        username: userDB.username
    }

    return jwt.sign(payload, envConfig.jwtSecret, {expiresIn: "1h"})
}

const verifyToken= (token)=>{
    return jwt.verify(token, envConfig.jwtSecret)
}

module.exports= {generateToken, verifyToken}

