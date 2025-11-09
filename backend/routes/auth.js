const express = require('express')
const user = require('../models/User')
const authMiddleware = require('../middleware/authMiddleware')
const bcrypt = require('bcrypt')
const User = require('../models/User')
require('dotenv').config()

const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router()


router.post("/register", async(req, res) => {

    const {username, password} = req.body
    const hashed = await bcrypt.hash(password, 10)

    await user.create({username, password : hashed})
    res.json({Message : "User Created"})

    console.log("User Created with name : ", username)
})


router.post('/login', async(req, res)=>{

    const {username, password} = req.body
    const user = await User.findOne({username})
    if(!user) return res.status(400).json({error})
    
    const token = jwt.sign({id : user._id}, JWT_SECRET)
    res.cookie("token", token, {httpOnly : true, secure : false, sameSite : 'lax'})

    res.json({message : "User Logged in"})
    console.log("User Logged In")

})


router.get('/logout', (req, res) =>{
    res.clearCookie('token').json({message : "Logged Out"})
    console.log("User Logged Out")
})

router.get('/profile', authMiddleware, async(req, res)=>{
    const user = await User.findById(req.userId)
    res.json({username : user.username})
})


module.exports  = router