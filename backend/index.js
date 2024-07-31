// Server

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./routes/expense")

dotenv.config();
const app=express();


//Middleware- initialized route
app.use(cors()) // server can any request from any web app
app.use(express.json())

//ROUTES
app.use("/expenses", expenseRoute)




// DB connection- Middleware

mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log('DB_CONNECTION is successful')
}).catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
})