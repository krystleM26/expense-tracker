const express = require('express')
const router = express.Router()

const Expense = require("../models/Expenses");

// ADD EXPENSE
 
router.post("/",  async (req, res) => {
  try {
    const newExpense= await Expense(req.body);
    const expense = newExpense.save()
    res.status(201).json(expense); 
  } catch (err) {
    res.status(500).json(error)

  }
});

// Get All Expenses

router.get("/", (req, res) => {

})

//Update Expense

router.put("/", (req,res) => {

})

//Delete Expense

router.delete("/", (req,res) => {

})


module.exports = router;