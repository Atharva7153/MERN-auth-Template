const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {


    const token = req.cookies.token

    if (!token) return res.sendStatus(401)

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    }catch{
        return res.sendStatus(403)
    }

}
