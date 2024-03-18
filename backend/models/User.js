const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt  = require("bcrypt")

const userSchema = new mongoose.Schema({
    email: {
        unique: [true, "Please enter an email"],
        type: String,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type:String,
        required: [true, "Please enter your password"],
        minLength: [6, "Minimum password lenght is 6 characters"]
    },
    name:{
        type: String,
        required: [true, "please enter a name"]
    },
    varified:{
        type: Boolean,
        default: false,
    }
});
//fire a function before doc saved to db
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();

})


const User = mongoose.model("user", userSchema);

module.exports = User;