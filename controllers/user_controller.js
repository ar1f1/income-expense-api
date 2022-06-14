const User = require('../model/user')
const bcrypt = require('bcrypt')


module.exports.register = async(req, res) => {
    const { user_name, email, password } = req.body
    console.log(req.body)
    try {
        const user = await User.create({
            user_name,
            email,
            password
        })
        res.redirect('login')
        res.status(200).json({ user: user._id })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ Error: error.message })
    }
}
module.exports.get_login = (req, res) => { res.render('login') }



module.exports.login = async(req, res) => {
    const { user_name, password } = req.body
    console.log(password)
    try {
        const user = await User.findOne({ user_name: user_name })
        console.log(user)
        if (user) {
            const auth = await bcrypt.compare(password, user.password)
            console.log(auth)
            if (auth) {
                res.status(200).json({ user: user._id })
            } else {
                res.status(500).json({ Message: "Inconrect password" })
            }
        } else {
            res.status(500).json({ Message: "Inconrect Email" })

        }
    } catch (error) {
        console.log(error.message)
    }
}
module.exports.get_signup = (req, res) => { res.render('signup') }