const Student = require("../models/Student-model")


const Getdata = async (req,res)=>{
const {semester, section, department} = req.body.select;

try {
    const data = await Student.find({semester:semester, section:section, department:department, temstatus:false});
    res.json(data)
    
} catch (error) {
    console.log(error)
}
}





module.exports = {Getdata}