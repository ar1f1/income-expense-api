const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Income = require('../model/income')
const Expense = require('../model/expense')
const { user_id } = require('../utils/constatnt')




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
        res.status(400).json({ message: error.message })
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
                user_id.id = user._id
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
module.exports.income_delete = async(req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const income = await Income.deleteOne({ _id: id })
        res.redirect('/user/admin')
    } catch (error) {
        res.json({ error: "Income not deleted" })
    }

}
module.exports.income_edit = async(req, res) => {
    try {
        const id = req.params.id
        const income = await Income.findOne({ _id: id })
        await Income.deleteOne({ _id: id })
        res.render('edit_income', { income: income })
    } catch (error) {
        res.json({ error: "not allowed" })
    }
}
module.exports.expense_edit = async(req, res) => {
    try {
        const id = req.params.id
        const expense = await Expense.findOne({ _id: id })
        await Expense.deleteOne({ _id: id })
        res.render('edit_expense', { expense: expense })

    } catch (error) {
        res.json({ error: "not allowed" })
    }
}
module.exports.expense_delete = async(req, res) => {
    try {
        const id = req.params.id
        const expense = await Expense.deleteOne({ _id: id })
        res.redirect('/user/admin')
    } catch (error) {
        res.json({ error: "Expense not delete" })
    }
}
module.exports.get_user = (req, res) => {
    User.find()
        .then((result) => {
            res.render("users", { result })
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.user_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.redirect("/user/users")
        })
        .catch((err) => {
            res.json(err)
        })
}