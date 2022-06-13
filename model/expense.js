var mongoose = require('mongoose')
const { isNumeric } = require('validator')


const expensSchema = mongoose.Schema({
    amount: {
        type: String,
        require: [true, "please enter the amount of Expense"],
        validate: [isNumeric, "please enter the amount in Number"]
    },
    reason: {
        type: String,
        require: [true, "please enter Expense reason"]

    }
})




const Expens = mongoose.model('expens', expensSchema);
module.exports = Expens