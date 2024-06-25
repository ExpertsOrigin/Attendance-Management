import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/Styles/Student.css'
export default function Students() {


  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  // const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const check = sessionStorage.getItem("isLoggedIn");

  const [studentdata, setstudentdata] = useState([]);

  useEffect(() => {
    if (!check || role !== "student") {
      navigate("/")
    }
  }, [])

  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
  }






  useEffect(() => {
    axios.post("http://localhost:4000/attstudent",{email}).then((res) => {
      setstudentdata(res.data.d)
    
    }).catch((error) => {
      console.log(error)

    })
  }, [])





  return (
    <>
      <button className='slogoutbtn' onClick={Logout}>Logout</button><br />
  <button className='resetstudents' ><Link className='updbtn' to = "/updatepassword">Update Password</Link></button>
<br />
      {/* <br /><h2 className='wlstd'>Welcome:{name}</h2> */}

      <section className="teachertable studenttable">
        <h1 className="studentdata-h1">Your Marked Attendance</h1>
        <table className='student-table'>
          <tbody>
            <tr>

              <th>Name</th>
              <th>S-ID</th>
              
              <th>Semester</th>
              <th>Date</th>
              <th>Attendance</th>
            </tr>
            {
              studentdata.map((res) => {
                const { name, sid, semester, date, attendance } = res;
                return (
                  <>
                    <tr>
                      <td>{name} </td>
                      <td>{sid} </td>
                      <td>{semester} </td>
                      <td>{date} </td>
                      <td>{attendance} </td>

                    </tr>
                  </>
                )

              })
            }

          </tbody>
        </table>
      </section>





    </>
  )
}
