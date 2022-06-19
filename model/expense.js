var mongoose = require('mongoose')


const expensSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true, "please enter the amount of Expense"],
    },
    reason: {
        type: String,
        required: [true, "please enter Expense reason"]

    },
    user_id: {
        type: mongoose.Types.ObjectId
    }
})




const Expens = mongoose.model('expens', expensSchema);
module.exports = Expens