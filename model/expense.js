var mongoose = require('mongoose')
var Schema = mongoose.Schema

var expense = new Schema({
  _id:Number,
  amount:Number,
  reason:String
})

module.exports = mongoose.model('expense', expense);
