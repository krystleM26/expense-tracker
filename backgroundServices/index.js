const express =require("express")
const cron = require("node-cron");
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const expenseEmail = require("./EmailService/Expense");

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log('DB_CONNECTION is successful')
}).catch((err) => {
    console.log(err)
});

//Schedule the task
const runSchedule =( ) => {
    cron.schedule('* * * * * *', () => {
      expenseEmail()
      });

}
runSchedule()
app.listen(process.env.PORT, () => {
    console.log(`Background Services is running on port ${process.env.PORT}`)
})
