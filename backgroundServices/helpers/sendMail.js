const nodemailer = require("nodemailer")
const dotenv = require("dotenv");
const { create } = require("domain");


dotenv.config()
function createTransporter(config) {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configurations = {
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    requireTLS:true,
    auth:{
        user:process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const sendMail= async(messageOption) => {
    try {
        const transporter = await createTransporter(configurations)
        await transporter.verify();

        const info = await transporter.sendMail(messageOption)
        console.log('Email Sent' + info.response);
    } catch (error) {
        console.log(error)
    }


}
   


module.exports=sendMail;
