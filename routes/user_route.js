const user_controller = require('../controllers/user_controller')
const express = require('express')
const requireUserAuth = require('../middleware/userAuth')
const admin = require('../controllers/admin')

const router = express.Router()

router.get('/login', user_controller.get_login)
router.post('/login', user_controller.login)
router.get('/signup', user_controller.get_signup)
router.post('/signup', user_controller.register)
router.get("/users", user_controller.get_user)
router.get("/users/delete/:id", user_controller.user_delete)
router.get('/admin', requireUserAuth.requireUserAuth, admin.get_admin)
router.get('/logout', user_controller.logout)
router.get('/income/delete/:id', user_controller.income_delete)
router.get('/income/edit/:id', user_controller.income_edit)

router.get('/expense/delete/:id', user_controller.expense_delete)
router.get('/expense/edit/:id', user_controller.expense_edit)


module.exports = router