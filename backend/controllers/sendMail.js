const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const dotenv = require('dotenv')
dotenv.config()

const sendmail = async (jwte, email)=>{
  console.log('nodemailer trigerred')
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',                             // service name
        // secureConnection: false,
        // tls: {
        //     ciphers: 'SSLv3'                            // tls version
        // },
        port: 587,
        // secure: false, // Use `true` for port 465, `false` for all other ports
        
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
     
        
        
      });
      const info = {
        from: {
            name: process.env.NAME,
            address: process.env.EMAIL

        }, // sender address
        to: email, // list of receivers
        subject: "Email Verification", // Subject line
        text: `Click on the link to verify your email id: ${process.env.BACKEND_URL}/confirmation/${jwte}`, // plain text body
        
      };
      try{

          await transporter.sendMail(info)
          console.log("mail sent")
      }
      catch(err){
        console.log(err)
      }      
}


module.exports = sendmail;