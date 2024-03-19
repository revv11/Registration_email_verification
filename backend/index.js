const express = require("express")
const app = express();
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')


//middleware
app.use(cors({credentials: true}))
app.use(express.json());


const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri)
    .then((result)=>{
        app.listen(4000)
            console.log("listening on port 4000")
        })

    .catch((err)=>{
        console.log(err)
    })

app.use(authRoutes)

app.get('/',(req, res) => {
    res.json({message: "Backend working properly"})
})