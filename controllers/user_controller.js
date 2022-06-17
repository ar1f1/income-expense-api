const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, maxAge: 1 })
    res.redirect('login')
}

module.exports.add_income = (req, res) => {
    res.render('add_income')
}
module.exports.register = async(req, res) => {
    try {
        const { user_name, email, password } = req.body
        const user = await User.create({
            user_name: user_name,
            email: email,
            password: password
        })
        res.status(200).json({ user: user._id })
    } catch (error) {
        res.status(400).json({ message: "there is some error" })
    }
}
module.exports.get_login = (req, res) => { res.render('login') }


// Create token function
const maxAge = 60
const createToken = (id) => {
    return jwt.sign({ id }, "life is lough", { expiresIn: maxAge * 60 })
}
module.exports.login = async(req, res) => {
    const { user_name, password } = req.body
    try {
        const user = await User.findOne({ user_name: user_name })
        if (user) {
            const auth = await bcrypt.compare(password, user.password)
            if (auth) {
                const token = createToken(user._id)
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 60 * 1000 })
                res.status(200).json({ user: user._id })
            } else {
                res.status(500).json({ message: "Inconrect password" })
            }
        } else {
            res.status(500).json({ message: "Inconrect User name" })

        }
    } catch (error) {
        console.log(error.message)
    }
}
module.exports.get_signup = (req, res) => { res.render('signup') }