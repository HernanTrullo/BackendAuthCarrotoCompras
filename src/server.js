const express= require("express")
const envConfig= require("./config/envConfig")
const securitySettings = require("./config/securitySettings")
const authRoutes= require("./routes/authRoutes")
const protectedRoutes= require("./routes/protectedRoutes")

const app= express()
const PORT= envConfig.port

securitySettings(app)

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/api", protectedRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el ${PORT}`)
})