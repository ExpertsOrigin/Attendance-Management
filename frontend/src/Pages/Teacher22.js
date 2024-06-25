import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export default function Teacher22() {
    const name = sessionStorage.getItem("name");
    const department = sessionStorage.getItem("department");
    const subject = sessionStorage.getItem("subject");
    const role = sessionStorage.getItem("role");
    const check = sessionStorage.getItem("isLoggedIn")
  
    const navigate = useNavigate();
    useEffect(() => {
      if (!check || role !== "teacher") {
        navigate("/");
      }
    }, [])




    const [mapdata, setmapdata] = useState([]);
    const [select, setselect] = useState({});
    const handleinput = (e) => { setselect({ ...select, [e.target.name]: e.target.value }) }


    /////////////// @@@@@@@@@   Attendance Start   @@@@@@@@@@ //////////////////



    const present = (e) => {
        axios.post("http://localhost:4000/present", { e }).then((res) => {
            alert(res.data.msg)
        }).catch((error) => {
            console.log(error)
        })
    }

    const absent = (e) => {
        axios.post("http://localhost:4000/absent", { e }).then((res) => {
            alert(res.data.msg)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect( (e) => {
        axios.post("http://localhost:4000/getdata", { select }).then((res) => {
                setmapdata(res.data)
               
            }).catch((error) => { console.log(error) })
        
    }, [present, absent])


//   const [data, setdata] = useState({});
    
  const Settemstatus = () => {
    axios.post("http://localhost:4000/settemstatus", { mapdata }).then((res) => {
    //   console.log(data)
      alert(res.data.msg);
    }).catch((error) => {
      console.log(error)
    })
   


  }

    return (
        <>
  <div className="updbtn"><button className='resetstudents' onClick={Settemstatus} >Reset Students</button>
  <button className='resetstudents' ><Link className='updbtn' to = "/updatepassword">Update Password</Link></button>
  </div>
            <div className="selectsection">
                <select name="semester" id="" onChange={handleinput}>
                    <option >Select semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select name="section" id="" onChange={handleinput}>
                    <option >Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select name="department" id="" onChange={handleinput}>
                    <option >Select Department</option>
                    <option value="english">english</option>
                    <option value="computer">computer</option>
                    <option value="physics">physics</option>
                </select>
               
            </div>


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
                            mapdata.map((res) => {
                                const { name, sid, subjects, semester, date } = res;
                                return (
                                    <>
                                        <tr >
                                            <td >{name} </td>
                                            <td >{sid} </td>
                                            <td >{subjects} </td>
                                            <td className='tchrtds'>{semester} </td>
                                            <td >{date} </td>


                                            <td className='tchractiontd' ><button onClick={() => (present(res))} className='attbtn'>Present</button>
                                                <button onClick={() => (absent(res))} className='attbtn'>Absent</button> </td>

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
