const jwt = require('jsonwebtoken')

const User = require('../model/user')


module.exports.requireUserAuth = async(req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        await jwt.verify(token, "life is lough", (err, decodeToken) => {
            if (err) {
                res.redirect('login')
            } else {
                next()
            }
        })
    } else {
        res.redirect('login')
    }
}