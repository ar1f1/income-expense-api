const Income = require('../model/income')
const Expense = require('../model/expense')


const handleErrors = (err) => {
    let errors = { amount: "", reason: "" }


    // Income validate
    if (err.message.includes("expens validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message

        })

    }
    return errors

}

module.exports.add_expense_page = (req, res) => {
    res.render('add_expense')
}
module.exports.post_expense = async(req, res) => {
    try {
        const { amount, reason } = req.body;
        const expense = await Expense.create({
            amount: amount,
            reason: reason
        })
        res.status(200).json({ expense: expense._id })
    } catch (error) {
        const errors = await handleErrors(error)
        console.log(errors)
        res.status(400).json({ errors })

    }
}