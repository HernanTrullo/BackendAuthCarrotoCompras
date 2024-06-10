const express= require("express")
const authenticateToken= require("../middleware/authMiddleware")

const router= express.Router()

router.use(authenticateToken)

// router.use('/productos', productoRoutes)
// router.use('/categorias', categoriaRoutes)


module.exports= router

