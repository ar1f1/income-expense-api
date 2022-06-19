const Income = require('../model/income')
const Expense = require('../model/expense')
const { user_id } = require('../utils/constatnt')
module.exports.get_admin = async(req, res) => {
    const incomes = await Income.find({ user_id: user_id.id })
    const expenses = await Expense.find({ user_id: user_id.id })

    res.render('admin.ejs', { incomes: incomes, expenses: expenses })
}