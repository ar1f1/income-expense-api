const Income = require('../model/income')


module.exports.add_income = async(req, res) => {
    try {
        const { amount, reason } = req.body;
        const income = await Income.create({ amount, reason })
        res.status(200).json({ income: income._id })

    } catch (error) {
        res.status(400).json({ Error: "plase try agin" })
    }

}
module.exports.get_income = async(req, res) => {
    try {
        const income = await Income.findById({ id })
        res.status(200).json({ income })
    } catch (error) {
        res.status(400).json({ Error: "please check the url paramiters(id)" })
    }
}
module.exports.edit_income = async(req, res) => {
    try {
        const { amount, reason } = req.body
        const id = req.params.id
        const income = await Income.findOneAndReplace({ id: _id }, {
            $set: {
                amount: amount,
                reason: reason
            }
        })
        res.status(200).json({ income: income._id })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
module.exports.delete_income = async(req, res) => {
    try {
        const id = req.params.id
        await Income.deleteOne({ id })
        res.status(200).json({ message: `Income with ${id} deleted` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}