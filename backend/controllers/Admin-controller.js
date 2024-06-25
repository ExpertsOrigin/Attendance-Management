const Student = require("../models/Student-model")
const Teacher = require("../models/Teacher-model");
// const User = require("../models/User-model");

const Addnewstudent = async (req, res) => {
    const { name, email, semester, sid, department, section ,subjects } = req.body.studentdata;

    const studentdata = Student({
        name: name,
        email: email,
        sid, sid,
        password: 123,
        department: department,
        semester: semester,
        subjects: subjects,
        section: section,
        role: 'student',
        temstatus: false,
        date: new Date().toDateString(),
        status: 0
    })

    try {
        await studentdata.save();
        res.json("New Student added successfully");
    } catch (error) {
        console.log(error)
        res.json(error);
    }

}

const Addnewteacher = async (req, res) => {
    const { name, email, phone, department, subject, password } = req.body.teacherdata;
    const teacherdata = Teacher({
        name: name,
        email: email,
        phone: phone,
        department: department,
        subject: subject,
        password: password,
        role: 'teacher',
        status: 0
    })

    try {
        await teacherdata.save();
        res.json("New Teacher added successfully")
    } catch (error) {
        res.json(error)
    }

}

const Getstudentdata = async (req, res) => {
    try {
        const result = await Student.find({ status: false });
        if (result) {
            res.json(result)
        }
        else{
            res.json("")
        }
    } catch (error) {
        console.log(error)
    }
}

const Getteacherdata = async (req, res) => {
    try {
        const result = await Teacher.find({ status: 0 })
        if (result.length > 0) {

            res.json(result)
        }
    } catch (error) {
        console.log(error)
    }
}

const Delete = async (req, res) => {
    const { email } = req.body.e;

    try {
        const filter = { email: email };
        const update = { status: true }

        await Student.findOneAndUpdate(filter, update);
        res.json({ msg: "account deleted" });
    } catch (error) {
        res.json(error)
    }
}

const Deletetec = async (req, res) => {
    const { email } = req.body.e;

    try {
        const filter = { email: email };
        const update = { status: true }

        await Teacher.findOneAndUpdate(filter, update);

        window.location.reload();
    } catch (error) {
        res.json(error)
    }
}
const Getuserdata = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Student.find({ sid: id })
        if (result.length > 0) {
            res.json(result)
        }
    } catch (error) {
        console.log(error)
    }
}
const Updatestd = async (req, res) => {
    const { name, password, department, semester } = req.body.finalupdate;
    const { id } = req.params;

    try {
        const filter = { sid: id }
        const update = { name: name, password: password, department: department, semester: semester }
        const result = await Student.findOneAndUpdate(filter, update);
        if (result) {
            res.json("student data updated");
        } else {
            res.json("please fill data")
        }
    } catch (error) {
        res.json(error);
    }
}


const Getuser2data = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Teacher.find({ email: id })
        if (result.length > 0) {
            res.json(result)
        }
    } catch (error) {
        console.log(error)
    }
}




const Updateteacher = async (req, res) => {
    const { email, password, department, subject } = req.body.finalupdate;
    const { id } = req.params;

    try {
        const filter = { email: id };
        const update = { email: email, password: password, department: department, subject: subject }
        const result = await Teacher.findOneAndUpdate(filter, update);

        if (result) {
            res.json("teacher data updated");
        } else {
            res.json("please fill data");
        }

    } catch (error) {
        res.json(error);
    }
}












module.exports = { Updateteacher, Getuser2data, Getuserdata, Deletetec, Addnewstudent, Addnewteacher, Getstudentdata, Getteacherdata, Delete, Updatestd };