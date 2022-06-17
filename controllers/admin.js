const Income = require('../model/income')
const Expense = require('../model/expense')
module.exports.get_admin = async(req, res) => {
    const incomes = await Income.find()
    const expenses = await Expense.find()

    res.render('admin.ejs', { incomes: incomes, expenses: expenses })
}