const income_con = require('../controllers/income_controller')
var express = require('express')
const router = express.Router()
const requireUserAuth = require('../middleware/userAuth')



router.get('/add', income_con.add_income_page)
router.post('/add', income_con.post_income)




module.exports = router;