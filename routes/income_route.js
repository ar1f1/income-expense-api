const income_con = require('../controllers/income_controller')
var express = require('express')
const router = express.Router()


router.post('', income_con.add_income)
router.get('', income_con.get_income)
router.delete('/:id', income_con.delete_income)
router.put('/:id', income_con.edit_income)

module.exports = router;