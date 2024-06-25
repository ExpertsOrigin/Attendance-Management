import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Dashboard1 from './Dashboard1';
export default function Updatestudent() {

  const [finalupdate, setFinalUpdate] = useState([])
  // const [temdata, settemdata] = useState();

  const { id } = useParams();

  const hadleinput2 = (e) => {

    setFinalUpdate({
      ...finalupdate, [e.target.name]: e.target.value

    })
  }

  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/getuserdata${id}`).then((res) => {
      setdata(res.data)
    }).catch((error) => {
      console.log(error)
    })
  })





  const update = () => {
    if (finalupdate.name !== undefined && finalupdate.password !== undefined && finalupdate.department !== undefined && finalupdate.semester !== undefined) {
      axios.post(`http://localhost:4000/updatestd${id}`, { finalupdate }).then((res) => {
        alert(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  return (
    <>
 <Dashboard1 />

      <h1 className='stdID'>Student ID : {id}</h1>
     

      <div>

        <section className="teacher-table">
          <table className='ttable'>
            <tbody>
              <tr>

                <th className='tabletd' >Name</th>
                <th className='tabletd' >S-ID</th>
                <th className='tabletd' >Semester</th>


              </tr>
              {
                data.map((res) => {
                  const { name, sid, semester,subject } = res;
                  return (
                    <>
                      <tr>
                        <td className='tabletd'>{name} </td>
                        <td className='tabletd'>{sid} </td>
                        <td className='tabletd'>{semester} </td>
                      </tr>
                    </>
                  )

                })
              }

            </tbody>
          </table>
        </section>


      </div>


      
      <div className="teacherupdate">
        <h3 className='updatedata'>Update Data</h3>
                <input type="text" name="name" id="" placeholder='name' onChange={hadleinput2} /><br />
                <input type="text" name="password" id="" placeholder='password' onChange={hadleinput2} /><br />
                <input type="text" name="department" id="" placeholder='department' onChange={hadleinput2} /><br />
                <input type="text" name="semester" id="" placeholder='semester' onChange={hadleinput2} /><br />
                <button onClick={update} className='teacherupdatebtn'>Update</button>
            </div>

          
    </>
  )
}
