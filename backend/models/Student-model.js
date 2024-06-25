const mongoose = require("mongoose")

const Studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    subjects: [{
        type: String,
        required: true
    }],
    role:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    temstatus:{
        type:Boolean,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})


const Student = mongoose.model("student", Studentschema);
Student.createIndexes();
module.exports = Student;