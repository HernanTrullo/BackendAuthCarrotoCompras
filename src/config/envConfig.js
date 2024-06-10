require("dotenv").config({ path : ".env.dev"})

const envConfig= {
    host: process.env.HOST,
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    nameSpace: process.env.NAMESPACE
}

module.exports= envConfig