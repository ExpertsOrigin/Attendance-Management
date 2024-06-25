const mongoose = require("mongoose")

const Teacherschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }

})


const Teacher = mongoose.model("teacher", Teacherschema);
Teacher.createIndexes();
module.exports = Teacher;