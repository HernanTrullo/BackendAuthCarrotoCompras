const helmet= require("helmet")
const cors= require("cors")

const corsOptions= {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

const securitySettings= (app)=>{
    app.use(helmet())
    app.use(cors(corsOptions))
}

module.exports= securitySettings



//const whiteList = ["http://localhost:3000"];

// const corsOptions = {
//     origin: (origen, callback) => {
//       if (whiteList.indexOf(origen) != -1 || !origen) {
//         callback(null, true);
//       } else {
//         callback(new Error("No permitido por cors"));
//       }
//     },
//     allowedHeaders: "*",
//     methods: "*",
//   };