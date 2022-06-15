require('./config/database').connect()
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const user_route = require('./controllers/user_controller')
const cookieParser = require('cookie-parser')




// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))


// Views     
app.set('view engine', 'ejs')




//Routes
const income = require('./routes/income_route')
const expense = require('./routes/expense_route')
const user = require('./routes/user_route')
app.use('/income', income)
app.use('/expense', expense)
app.use('/user', user)


// Server
app.listen(3000, () => {
    console.log('Server is running in port 3000')
})