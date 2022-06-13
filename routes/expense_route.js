const express = require('express')
const con_expense = require('../controllers/expense_controller')
const router = express.Router()




router.post('', con_expense.add_expense)
router.get('', con_expense.get_expense)
router.delete('/:id', con_expense.delete_expense)
router.put('/:id', con_expense.edit_expense)

module.exports = router;