const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirm:{
        type:String,
        required:true
    }

})

//create collection
const Register = new mongoose.model("Register",employeeSchema);

module.exports = { Register }