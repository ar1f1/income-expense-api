var mongoose = require('mongoose')


const incomeSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true, "please enter the amount of Income"]
    },
    reason: {
        type: String,
        required: [true, "please enter Income reason"]

    },
    user_id: {
        type: mongoose.Types.ObjectId
    }
})




const Income = mongoose.model('income', incomeSchema);
module.exports = Income