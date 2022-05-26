var Expense = require('../model/expense')

const add_expense = (req, res) => {
 var exepnse = new Expense(req.body)
 exepnse._id = req.body.id
 exepnse.amount = req.body.amount
 exepnse.reason = req.body.reason

 exepnse.save((err, saveExpense) => {
   if(err){
     res.status(500).send({err:"Could not save product"})
   }
   else {
     res.status(200).send(saveExpense)
   }
 })
}

const get_all_expense = (req, res) => {
  Expense.find({}, (err, expense) => {
    if(err){
      res.status(500).send({error:"could not fetch products"})
    }else{
      res.status(200).send(expense)
    }
  })
}

const delete_one_expense = (req, res) => {
 Expense.deleteOne({_id:req.params.id}, (err, expesne) => {
   if(err){
     res.status(500).send({error:"Could not find the object"})
   }
   else{
     res.status(200).send(expesne)
   }
 })
}

const update_expenses = (req, res) => {
 const {amount, reason} = req.body
 Exepnse.find({_id:req.params.id}, (err, expense) => {
   if(err){
     res.status(500).send({eroor:"Document not found"})
   }else{
     var myquery = { _id:req.params.id };
     var newvalues = {$set: {amount: amount, reason:reason} };
     Expense.updateOne(myquery, newvalues, (err, expense) => {
       if (err){
         res.status(500).send({error:"Could not updated"})
       }
       else{
         res.status(200).send(expense)
       }
     })
   }
 })
}

module.exports = {
  add_expense,
  get_all_expense,
  delete_one_expense,
  update_expenses
};
