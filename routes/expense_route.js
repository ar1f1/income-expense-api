const expense_con = require('../controllers/expense_controller')
var express = require('express')
const router = express.Router()
const requireUserAuth = require('../middleware/userAuth')



router.get('/add', expense_con.add_expense_page)
router.post('/add', expense_con.post_expense)




module.exports = router;