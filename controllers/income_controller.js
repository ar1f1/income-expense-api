var Income = require('../model/income')


// Add an income
const add_income = (req, res) => {
 var Income = new Income(req.body)
 income ._id = req.body.id
 income .amount = req.body.amount
 income .reason = req.body.reason

 income .save((err, saveIncome) => {
   if(err){
     res.status(500).send({err:"Could not save product"})
   }
   else {
     res.status(200).send(saveIncome)
   }
 })
}

// Get all incomes
const get_all_income = (req, res) => {
  Income.find({}, (err, income) => {
    if(err){
      res.status(500).send({error:"could not fetch products"})
    }else{
      res.status(200).send(income)
    }
  })
}

// Delete an income
const delete_one_income = (req, res) => {
 Income.deleteOne({_id:req.params.id}, (err, income) => {
   if(err){
     res.status(500).send({error:"Could not find the object"})
   }
   else{
     res.status(200).send(income)
   }
 })
}

const update_income = (req, res) => {
 const {amount, reason} = req.body
 Income.find({_id:req.params.id}, (err, income) => {
   if(err){
     res.status(500).send({eroor:"Document not found"})
   }else{
     var myquery = { _id:req.params.id };
     var newvalues = {$set: {amount: amount, reason:reason} };
     Income.updateOne(myquery, newvalues, (err, income) => {
       if (err){
         res.status(500).send({error:"Could not updated"})
       }
       else{
         res.status(200).send(income)
       }
     })
   }
 })
}

module.exports = {
  add_income,
  get_all_income,
  delete_one_income,
  update_income
};
