import React, { useEffect, useState } from 'react'
import '../Assets/Styles/Teachers.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Dashboard2 from './Dashboard2';

export default function Teachers() {
  const name = sessionStorage.getItem("name");
  const department = sessionStorage.getItem("department");
  const subject = sessionStorage.getItem("subject");
  const role = sessionStorage.getItem("role");
  const check = sessionStorage.getItem("isLoggedIn")

  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    if (!check || role !== "teacher") {
      navigate("/");
    }
  }, [])

  useEffect(() => {
    setdata({
      ...data, department: department, subject: subject,
    })
  }, [])


  const present = (e) => {
    axios.post("http://localhost:4000/present", { e, subject }).then((res) => {
      alert(res.data.msg)
    }).catch((error) => {
      console.log(error)
    })
  }

  const absent = (e) => {
    axios.post("http://localhost:4000/absent", { e, subject }).then((res) => {
      alert(res.data.msg)
    }).catch((error) => {
      console.log(error)
    })
    console.log(e);
  }

  const Getstudent = () => {
    axios.post("http://localhost:4000/getstudent", { data }).then((res) => {
      setStudentData(res.data.d)
    }).catch((error) => {
      console.log(error)
    })

  }

  useEffect(() => {
    axios.post("http://localhost:4000/getstudent", { data }).then((res) => {
      setStudentData(res.data.d)
    }).catch((error) => {
      console.log(error)
    })
  }, [present, absent])



  const Settemstatus = () => {
    axios.post("http://localhost:4000/settemstatus", { data }).then((res) => {
      console.log(data)
      alert(res.data.msg);
    }).catch((error) => {
      console.log(error)
    })
    // sessionStorage.clear();
    // navigate("/")


  }




  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
  }



  return (
    <>
      <button className='Tlogoutbtn' onClick={Logout}>Logout</button>
      <br />
      <div className='welcom'><h1>Welcome: {name}</h1></div>
      <div><button onClick={Getstudent} className='subjectbtn'>{subject}</button></div>


      <section className="teachertable">
        <h1 className="studentdata-h1">Student Attendance Sheet</h1>
        <table className='teacher--table'>
          <tbody>
            <tr>

              <th>Name</th>
              <th>S-ID</th>
              <th>Subject</th>
              <th>Semester</th>
              <th>Date</th>
              <th>Attendance</th>
            </tr>
            {
              studentData.map((res) => {
                const { name, sid, subjects, semester, date } = res;
                return (
                  <>
                    <tr>
                      <td >{name} </td>
                      <td >{sid} </td>
                      <td >{subjects} </td>
                      <td >{semester} </td>
                      <td >{date} </td>
                      <td ><button onClick={() => (present(res))} className='attbtn'>Present</button>
                        <button onClick={() => (absent(res))} className='attbtn'>Absent</button> </td>

                    </tr>
                  </>
                )

              })
            }
          </tbody>
        </table>
      </section>

      <button onClick={Settemstatus} >Reset Students</button>


    </>
  )
}
