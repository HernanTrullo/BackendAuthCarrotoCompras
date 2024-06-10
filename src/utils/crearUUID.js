const {v5: uuidv5}= require("uuid")
const envConfig= require("../config/envConfig")


function crearUUID(username){
    return uuidv5(username, envConfig.nameSpace)
}

module.exports= crearUUID