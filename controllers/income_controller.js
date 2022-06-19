const Income = require('../model/income')
const { user_id } = require('../utils/constatnt')



const handleErrors = (err) => {
    let errors = { amount: "", reason: "" }


    // Income validate
    if (err.message.includes("income validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message

        })

    }
    return errors

}

module.exports.add_income_page = (req, res) => {
    res.render('add_income')
}
module.exports.post_income = async(req, res) => {
    try {
        const { amount, reason } = req.body;
        const income = await Income.create({
            amount: amount,
            reason: reason,
            user_id: user_id.id

        })
        res.status(200).json({ income: income._id })
    } catch (error) {
        const errors = await handleErrors(error)
        console.log(errors)
        res.status(400).json({ errors })

    }
}