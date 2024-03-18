const express = require("express")
const app = express();
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const jwt = require("jsonwebtoken")


//middleware

app.use(express.json());


const dbUri = 'mongodb+srv://revv:revv11@cluster0.orhbdgl.mongodb.net/Registration'
mongoose.connect(dbUri)
    .then((result)=>{
        app.listen(4000)
            console.log("listening on port 4000")
        })

    .catch((err)=>{
        console.log(err)
    })

app.use(authRoutes)
