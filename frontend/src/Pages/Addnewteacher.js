import React, { useState } from 'react'
import axios from 'axios'

import Dashboard1 from './Dashboard1';


export default function Addnewteacher({ state }) {


    // teacher Data  @@@@@@@@@@@
    const [teacherdata, setteacherdata] = useState({})
    const hadleinput2 = (e) => {
        setteacherdata({
            ...teacherdata, [e.target.name]: e.target.value
        })
    }
    const Submitteacher = () => {
        if (teacherdata.name !== undefined && teacherdata.email !== undefined && teacherdata.phone !== undefined && teacherdata.department !== undefined && teacherdata.subject !== undefined && teacherdata.password !== undefined) {
            axios.post("http://localhost:4000/addnewteacher", { teacherdata }).then((res) => {
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



            
                <h1 className='teacherh1'>Add New Teacher</h1>
               
            <div className="teacherupdate">
                <input type="text" name="name" id="" placeholder='name' onChange={hadleinput2} /><br />
                <input type="text" name="email" id="" placeholder='email' onChange={hadleinput2} /><br />
                <input type="text" name="phone" id="" placeholder='phone' onChange={hadleinput2} /><br />
                <input type="text" name="department" id="" placeholder='department' onChange={hadleinput2} /><br />
                <input type="text" name="subject" id="" placeholder='subject' onChange={hadleinput2} /><br />
                <input type="text" name="semester" id="" placeholder='semester' onChange={hadleinput2} /><br />
                <input type="text" name="password" id="" placeholder='password' onChange={hadleinput2} /><br />
                <button className="tbtn" onClick={Submitteacher} type="submit">Submit</button>
            </div>

           



        </>
    )
}
