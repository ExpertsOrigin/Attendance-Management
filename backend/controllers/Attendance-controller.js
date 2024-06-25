const Attendance = require("../models/Attendance-model")
const Student = require("../models/Student-model")
const Present = async (req, res) => {
    const { _id, name, email, semester, sid, department, role } = req.body.e;
   
    const data = Attendance({
        name: name,
        email: email,
        semester: semester,
        sid: sid,
        department: department,
        temstatus: true,
        attendance:"present",
        role: role,
        status: 0,
        date: new Date().toDateString()
    })

    try {
        await data.save();
        const filter = { _id: _id };
        const update = { temstatus: true }
        await Student.findOneAndUpdate(filter, update);
        res.json({ msg: "present marked" })
    } catch (error) {
        console.log(error)
    }
}

const Absent = async (req, res) => {
    const { _id, name, email, semester, sid, department, role } = req.body.e;
    
    const data = Attendance({
        name: name,
        email: email,
        semester: semester,
        sid: sid,
        department: department,
        attendance: "absent",
        temstatus: true,
        role: role,
        status: 0,
        date: new Date().toDateString()
    })

    try {
        const filter = { _id: _id };
        const update = { temstatus: true }
        await data.save();
        await Student.findOneAndUpdate(filter, update);
        res.json({ msg: "Absent marked" })
    } catch (error) {
        console.log(error)
    }
}




const Attstudent = async (req, res) => {
    const { email } = req.body;
    try {
        // const result = await Attendance.find()
        // res.json({msg:"data fetched",d:result})

        const data = await Attendance.find({ email: email })
        if (data.length > 0) {
            res.json({ msg: "data fetched", d: data })
        } else {
            const data = await Student.find({ email: email })
            res.json({ d: data })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Present, Absent, Attstudent };
