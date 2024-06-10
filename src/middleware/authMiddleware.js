const jwt= require("../utils/jwt")

const authenticateToken= (req, res, next)=>{
    const authheader= req.headers["authorization"]
    const token= authheader && authheader.split(" ")[1]

    if(token == null){
        return res.status(401).json({message: "No existe token"})
    }

    try {
        const user= jwt.verifyToken(token)
        req.user= user
        
        next()

    } catch (error) {
        return res.status(401).json({message: "No existe token"})
    }
}

module.exports = authenticateToken