const express = require('express')
const con_expense = require('../controllers/expense_controller')
const router = express.Router()
var bodyParser  = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

router.post('', con_expense.add_expense)



router.get('', con_expense.get_all_expense)


router.delete('/:id',con_expense.delete_one_expense)

router.put('/:id',con_expense.update_expenses)

module.exports = router;
