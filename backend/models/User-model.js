const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        required:true
    }
})


const User = mongoose.model("user", Userschema);
User.createIndexes();
module.exports = User;