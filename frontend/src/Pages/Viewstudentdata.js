import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Assets/Styles/Admin.css"
import axios from 'axios';
import Dashboard1 from './Dashboard1';

export default function Viewstudentdata() {

  const [sdata, setsdata] = useState([]);



  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const check = sessionStorage.getItem("isLoggedIn")

  useEffect(() => {
    if (!check || role !== "admin") {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    axios.get("http://localhost:4000/getstudentdata").then((res) => {
      setsdata(res.data)
    }).catch((error) => {
      console.log(error)

    })
  })



  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/getteacherdata").then((res) => {
      setdata(res.data)
    }).catch((error) => {
      console.log(error)

    })
  })


  const Deletestd = (e) => {
    axios.post("http://localhost:4000/deletestudent", { e }).then((res) => {
      alert(res.data.msg)
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })

  }


  const Deletetec = (e) => {
    axios.post("http://localhost:4000/deleteteacher", { e }).then((res) => {
      alert(res.data.msg)
    }).catch((error) => {
      console.log(error);
    })
  }


  return (


    <>
      <Dashboard1 />

      <h1 className='welcomeadmin'>Welcome:{name}</h1>

      <div className="admin-main-form">


        <section className="teacher-table">
          <h1 className="studentdata-h1">Student Data</h1>
          <table className='ttable'>
            <tbody>
              <tr>

                <th className='tabletd' >Name</th>
                <th className='tabletd' >S-ID</th>
                <th className='tabletd' >Subject</th>
                <th className='tabletd' >Semester</th>
                <th className='tabletd' >Action</th>

              </tr>
              {
                sdata.map((res) => {
                  const { name, sid, subjects, semester } = res;
                  return (
                    <>
                      <tr>
                        <td className='tabletd'>{name} </td>
                        <td className='tabletd'>{sid} </td>
                        <td className='tabletd'>{subjects} </td>
                        <td className='tabletd'>{semester} </td>
                        <td className='tabletd action'><button className='delbtn' onClick={() => (Deletestd(res))}>Delete</button>
                          <button className='delbtn '><Link className='ulink' to={`/updatestudent/${sid}`} >Update</Link></button>
                        </td>
                      </tr>
                    </>
                  )

                })
              }

            </tbody>
          </table>
        </section>


        <section className="teacher-table">
          <h1 className="studentdata-h1">Teacher Data</h1>
          <table className='ttable' >
            <tbody  >
              <tr>
                <th className='tabletd' >Name</th>
                <th className='tabletd' >Phone</th>
                <th className='tabletd' >Subject</th>
                <th className='tabletd' >Department</th>
                <th className='tabletd' >Action</th>

              </tr>
              {
                data.map((res) => {
                  const { name, phone, email, subject, department } = res;
                  return (
                    <>
                      <tr>
                        <td className='tabletd' >{name} </td>
                        <td className='tabletd' >{phone} </td>
                        <td className='tabletd' >{subject} </td>
                        <td className='tabletd' >{department} </td>
                        <td className='tchraction'><button className='delbtn' onClick={() => (Deletetec(res))}>Delete</button>
                          <button className='delbtn '><Link className='ulink' to={`/updateteacher/${email}`} >Update</Link></button>
                        </td>

                      </tr>
                    </>
                  )

                })
              }

            </tbody>
          </table>
        </section>
      </div>



    </>
  )
}
