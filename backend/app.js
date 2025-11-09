const express = require('express')
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const authRouter = require("./routes/auth")

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({

    origin : 'http://localhost:5173',
    credentials : true

}))

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDb data connectedd")
})


app.use('/auth', authRouter)





app.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000")
})