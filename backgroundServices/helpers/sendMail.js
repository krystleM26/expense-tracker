const nodemailer = require("nodemailer")
const dotenv = require("dotenv");
const { google } = require("googleapis");


dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



async function sendMail(messageOption) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                type:'0Auth2',
                user: process.env.EMAIL,
                clientID: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,

            }
        })
        const result = await transporter.sendMail(messageOption);
        console.log(result)
    } catch (error) {
        console.log("Error sending email", error)
    }
} 

module.exports=sendMail;
