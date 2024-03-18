const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

const sendmail = async (jwte, email)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        
        auth: {
          user: "revv1811@outlook.com",
          pass: "helloworld@1234",
        },
        tls: {
          ciphers:'SSLv3'
      }
        
      });
      const info = {
        from: {
            name: "revv",
            address: "revv1811@outlook.com"

        }, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `http://localhost:4000/confirmation/${jwte}`, // plain text body
        
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