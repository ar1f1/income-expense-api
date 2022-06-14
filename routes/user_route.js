const user_controller = require('../controllers/user_controller')
const express = require('express')

const router = express.Router()

router.get('/login', user_controller.get_login)
router.post('/login', user_controller.login)
router.get('/signup', user_controller.get_signup)
router.post('/signup', user_controller.register)
router.get('/admin', (req, res) => { res.render('admin') })

module.exports = router