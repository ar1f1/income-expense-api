var mongoose = require('mongoose')
var Schema = mongoose.Schema

var income = new Schema({
  _id:Number,
  amount:Number,
  reason:String
})

module.exports = mongoose.model('income', income);
