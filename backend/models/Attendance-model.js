const mongoose = require("mongoose")

const Attendanceschema = new mongoose.Schema({
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
    attendance:{
        type:String,
        required:true
    },
    temstatus:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})


const Attendance = mongoose.model("attendance", Attendanceschema);
Attendance.createIndexes();
module.exports = Attendance;