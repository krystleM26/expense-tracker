const { google } = require("googleapis");
const readline = require("readline");
const dotenv = require("dotenv");

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"],

})

console.log("Authorize this app by visiting this url:", authUrl);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
  });
  
  rl.question("Enter the code from that page here: ", async (code) => {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log("Refresh Token:", tokens.refresh_token);
    rl.close();
  });