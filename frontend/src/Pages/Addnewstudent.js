import React, { useState } from 'react'
import axios from 'axios'

import Dashboard1 from './Dashboard1';

export default function Addnewstudent() {

    // student Data  @@@@@@@@@@@
    const [studentdata, setstudentdata] = useState({})
    const hadleinput2 = (e) => {
        setstudentdata({
            ...studentdata, [e.target.name]: e.target.value
        })
    }

    const handlestudentsubject = (e) => {
        const arr = e.target.value;
        const subjectarr = arr.split(' ');
        setstudentdata({
            ...studentdata, subjects: subjectarr
        })
    }
    const Submitstudent = () => {
        if (studentdata.name !== undefined && studentdata.email !== undefined && studentdata.semester !== undefined && studentdata.sid !== undefined && studentdata.department !== undefined && studentdata.subjects !== undefined && studentdata.section !== undefined) {
            axios.post("http://localhost:4000/addnewstudent", { studentdata }).then((res) => {
                alert(res.data);
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert("please add data")
        }
    }




    return (
        <>

            <Dashboard1 />

            <h1 className='teacherh1'>Add New Student</h1>
            <div className="teacherupdate">
                <input type="text" name="name" id="" placeholder='name' onChange={hadleinput2} /><br />
                <input type="text" name="email" id="" placeholder='email' onChange={hadleinput2} /><br />
                <input type="text" name="sid" id="" placeholder='sid' onChange={hadleinput2} /><br />
                <input type="text" name="department" id="" placeholder='department' onChange={hadleinput2} /><br />
                <input type="text" name="semester" id="" placeholder='semester' onChange={hadleinput2} /><br />
                <input type="text" name="section" id="" placeholder='section' onChange={hadleinput2} /><br />
                <input type="text" name="subject" id="" placeholder='subject' onChange={handlestudentsubject} /><br />
                <button className="tbtn" onClick={Submitstudent} type="submit">Submit</button>
            </div>


        </>

    )
}
