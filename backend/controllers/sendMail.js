const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const dotenv = require('dotenv')
dotenv.config()

const sendmail = async (jwte, email)=>{
  console.log('nodemailer trigerred')
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        // secure: false, // Use `true` for port 465, `false` for all other ports
        
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      //   tls: {
      //     ciphers:'SSLv3'
      // }
        
        
      });
      const info = {
        from: {
            name: process.env.NAME,
            address: process.env.EMAIL

        }, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `${process.env.BACKEND_URL}/confirmation/${jwte}`, // plain text body
        
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