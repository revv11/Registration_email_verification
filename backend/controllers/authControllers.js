const User = require('../models/User');
const jwt = require("jsonwebtoken")
const sendmail = require("./sendMail")
const dotenv = require('dotenv')
dotenv.config()
//handle errors
const handleErrors = (err)=>{
    console.log(err.message, err.code);
    let errors = {email: "", password: ""};

 

    //duplicate error code
    if (err.code === 11000){
        errors.email = "that email is aleready registerd";
        return errors;
    }



    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }
    console.log(errors);
    return errors;
}

//generate tokens
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'verstappen fir jeet gya',{
        expiresIn: maxAge
    });
}
const createmailToken= (id)=>{
    return jwt.sign({id}, 'emailjwt',{
        expiresIn: maxAge
    })
}


module.exports.signup_get = (req,res)=>{
    
}

module.exports.login_get = (req,res)=>{
    
}
module.exports.signup_post = async (req,res)=>{
    const {email, password, name} = req.body;

    try{
        const user = await User.create({email, password, name})
        const token = createToken(user._id)
        const etoken = createmailToken(user._id)
        res.status(201).json({user: user._id, jwt:token})
        const a = await sendmail(etoken, email);
    }
    catch(err){
        
        const errors = handleErrors(err)
        res.status(400).json({errors});
    }
}



module.exports.confirmation_get =async (req, res) => {
    try {
        const  user = jwt.verify(req.params.token, 'emailjwt');
        console.log(user)
        await User.findOneAndUpdate({_id: user.id },{varified: true})
        res.redirect(`${process.env.FRONTEND_URL}/Home`)
      } catch (e) {
        res.send('error');
      }
}