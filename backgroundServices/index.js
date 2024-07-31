const express =require("express")
const cron = require("node-cron");
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log('DB_CONNECTION is successful')
}).catch((err) => {
    console.log(err)
});

//Schedule the task
const runSchedule =( ) => {
    cron.schedule('* * * * * *', () => {
        console.log('running a task every second');
      });

}
runSchedule()
app.listen(process.env.PORT, () => {
    console.log(`Server is runnind on port ${process.env.PORT}`)
})
