var mongoose = require('mongoose')
const { isNumeric } = require('validator')


const incomeSchema = mongoose.Schema({
    amount: {
        type: String,
        require: [true, "please enter the amount of Income"],
        validate: [isNumeric, "please enter the amount in Number"]
    },
    reason: {
        type: String,
        require: [true, "please enter Income reason"]

    }
})




const Income = mongoose.model('income', incomeSchema);
module.exports = Income