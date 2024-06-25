const express = require("express")
const jwt = require("jsonwebtoken")
const { Tchrlogin, Getstudent, Temstatus, Updatepassword } = require("../controllers/Teacher-login-controller")
const { Addnewstudent, Addnewteacher, Getstudentdata, Getteacherdata, Delete, Deletetec, Updatestd, Getuserdata, Updateteacher, Getuser2data } = require("../controllers/Admin-controller");
const { Present, Absent, Attstudent } = require("../controllers/Attendance-controller");
const { Getdata } = require("../controllers/Student-login-controller");


const router = express.Router();

router.post("/addnewstudent", Addnewstudent)
router.post("/addnewteacher", Addnewteacher)
router.get("/getstudentdata", Getstudentdata)
router.get("/getteacherdata", Getteacherdata)
router.post("/tchrlogin", Tchrlogin);
router.post("/attstudent", Attstudent)
router.post("/getstudent", Getstudent)
router.get("/getuserdata:id", Getuserdata)
router.get("/getuser2data:id", Getuser2data)
router.post("/updatestd:id", Updatestd)
router.post("/updateteacher:id", Updateteacher)
router.post("/getdata", Getdata)
router.post("/updatepassword", Updatepassword)

router.post("/present", Present)
router.post("/absent", Absent)
router.post("/settemstatus", Temstatus)
router.post("/deletestudent", Delete)
router.post("/deleteteacher", Deletetec)



module.exports = router;
