const Teacher = require("../models/Teacher-model")
const Student = require("../models/Student-model")
const User = require("../models/User-model")
const Attendance = require("../models/Attendance-model")

const Tchrlogin = async (req, res) => {
    const { email, role, password } = req.body.data;


    if (role === 'teacher') {
        const data = await Teacher.find({ email: email, password: password })
        if (data.length > 0) {
            res.json({ msg: "teacher login succesfully", d: data })
        }
        else {
            res.json({ msg: "invalid user" })
        }
    }
    else
        if (role === 'student') {
            const data = await Student.find({ email: email, password: password })
            if (data.length > 0) {
                res.json({ msg: "student login successfully", d: data })

            }
            else {
                res.json({ msg: "invalid user" })
            }
        }

        else
            if (role === 'admin') {
                const data = await User.find({ email: email, password: password })
                if (data.length > 0) {
                    res.json({ msg: "admin login successfully", d: data })
                }
                else {
                    res.json({ msg: "invalid user" })
                }
            }
}


// const Getstudent = async (req, res) => {
//     const { department, subject } = req.body.data;

//     try {
//         const data = await Student.find({ department: department, subjects: { $in: [subject] } })
//         res.json({ msg: "student data fetched successfully", d: data })
//     } catch (error) {
//         console.log(error)
//     }
// }


const Getstudent = async (req, res) => {
    const { department, subject } = req.body.data;
    try {
        const data = await Student.find({ department: department, temstatus: false, subjects: { $in: [subject] } })
        res.json({ msg: "student data fetched successfully", d: data })
    } catch (error) {
        console.log(error)
    }
}


// const Getonstd = async (req, res) => {
//     const { email } = req.body.e;
//     console.log(email)
//     try {
//         const result = await Attendance.find({ email: email });
//         res.json({msg:"student data fetched",d:result})
//         console.log(result)
//         // res.json(data)
//     } catch (error) {
//         console.log(error)
//     }
// }



const Temstatus = async (req, res) => {
    try {
        const filter = { temstatus:true};
        const update = { temstatus: false };
        const data = await Student.updateMany(filter, update);
        if (data.temstatus !== true) {
            res.json({ msg: "students are reseted" });
        } else {
            res.json({ msg: "students are not reseted" });
        }

    } catch (error) {
        console.log(error);
    }
}

const Updatepassword = async (req,res)=>{
const {email,password,newpassword} = req.body.data;
try {
    const filter = {email:email,password:password}
    const update = {password:newpassword}
    const result = await Teacher.findOneAndUpdate(filter,update);
    if(result){
        res.json("teacher password updated")
    }else{
        const result = await Student.findOneAndUpdate(filter,update);
        res.json("student password updated")
    }
} catch (error) {
    console.log(error)
}
}











module.exports = { Tchrlogin, Getstudent, Temstatus , Updatepassword};
