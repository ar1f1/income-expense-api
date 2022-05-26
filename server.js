var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser  = require('body-parser')
var db = mongoose.connect('mongodb://localhost/income-expense')




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var income = require('./routes/income_route')
const expense = require('./routes/expense_route')

app.use('/income', income)
app.use('/expense', expense)

app.listen(3000, () => {
  console.log('Server is running in port 3000')
})
