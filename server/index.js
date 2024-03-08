const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes")
const residenciesRoutes = require("./routes/ResidenceyRoutes")

// const PORT = process.env.PORT || 4002 ;


dotenv.config();
// middle ware

app.use(express.json());
app.use(cors());

app.use("/user",userRoutes)
app.use("/post",residenciesRoutes)


const StartServer = async ()=>{
    mongoose.connect("mongodb://localhost:27017/realestatedb").then(()=>{
        app.listen(4002 ,()=>{
            console.log("Server Is Working");
        })
        
    })
}
StartServer();