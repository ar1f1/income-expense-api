require('./config/database').connect()
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')




// middleware
app.use(express.json())



//Routes
const income = require('./routes/income_route')
const expense = require('./routes/expense_route')
app.use('/income', income)
app.use('/expense', expense)


// Server
app.listen(3000, () => {
    console.log('Server is running in port 3000')
})