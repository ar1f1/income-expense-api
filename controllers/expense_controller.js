const Expense = require('../model/expense')


module.exports.add_expense = async(req, res) => {
    try {
        const { amount, reason } = req.body;
        const expense = await Expense.create({ amount, reason })
        res.status(200).json({ expense: expense._id })

    } catch (error) {
        res.status(400).json({ Error: "plase try agin" })
    }

}
module.exports.get_expense = async(req, res) => {
    try {
        const expense = await Expense.findById({ id })
        res.status(200).json({ expense })
    } catch (error) {
        res.status(400).json({ Error: "please check the url paramiters(id)" })
    }
}
module.exports.edit_expense = async(req, res) => {
    try {
        const { amount, reason } = req.body
        const id = req.params.id
        const income = await Expense.findOneAndReplace({ id: _id }, {
            $set: {
                amount: amount,
                reason: reason
            }
        })
        res.status(200).json({ expense: expense._id })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
module.exports.delete_expense = async(req, res) => {
    try {
        const id = req.params.id
        await Expense.deleteOne({ id })
        res.status(200).json({ message: `Expense with ${id} deleted` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}