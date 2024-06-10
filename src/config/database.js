const envConfig= require("./envConfig")
const mysql= require("mysql2/promise")

const pool = mysql.createPool({
    host: envConfig.dbHost,
    user: envConfig.dbUser,
    password: envConfig.dbPassword,
    database: envConfig.dbName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports= pool