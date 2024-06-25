import React, { useEffect, useState } from 'react'
import "../Assets/Styles/Tchrupdate.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Dashboard1 from './Dashboard1';
export default function Teacherupdate() {

    const { id } = useParams();

    const [finalupdate, setfinalupdate] = useState([])

    const hadleinput2 = (e) => {
        setfinalupdate({
            ...finalupdate, [e.target.name]: e.target.value

        })
    }

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/getuser2data${id}`).then((res) => {
            setdata(res.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])






    const update = () => {
        if (finalupdate.email !== undefined && finalupdate.password !== undefined && finalupdate.department !== undefined && finalupdate.subject !== undefined) {
            axios.post(`http://localhost:4000/updateteacher${id}`, { finalupdate }).then((res) => {
                alert(res.data)
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
 <Dashboard1 />

          

            <div>

<section className="teacher-table ">
    <h1 className="studentdata-h1">Teacher Data</h1>
    <table className='ttable teachertable'>
        <tbody>
            <tr>

                <th className='tabletd' >Name</th>
                <th className='tabletd' >email</th>
                <th className='tabletd' >Subject</th>
            
                <th className='tabletd' >department</th>
                <th className='tabletd' >password</th>


            </tr>
            {
                data.map((res) => {
                    const { name, email, subject, department, password } = res;
                    return (
                        <>
                            <tr>
                                <td className='tabletd'>{name} </td>
                                <td className='tabletd'>{email} </td>
                                <td className='tabletd'>{subject} </td>
                             
                                <td className='tabletd'>{department} </td>
                                <td className='tabletd'>{password} </td>
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
                <input type="text" name="email" id="" placeholder='email' onChange={hadleinput2} /><br />
                <input type="text" name="password" id="" placeholder='password' onChange={hadleinput2} /><br />
                <input type="text" name="department" id="" placeholder='department' onChange={hadleinput2} /><br />
                <input type="text" name="subject" id="" placeholder='subject' onChange={hadleinput2} /><br />
                <button onClick={update} className='teacherupdatebtn'>Update</button>
            </div>

          

        </>
    )
}
