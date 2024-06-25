import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Assets/Styles/Login.css'
import axios from 'axios'


export default function Login() {
    const navigate = useNavigate();
    const [data, setdata] = useState({});
    const HandleInput = (e) => {
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }



    const Submit = () => {
        // console.log(data)
        if (data.email !== undefined && data.password !== undefined && data.role !== undefined) {
            axios.post("http://localhost:4000/tchrlogin", { data }).then((res) => {
                console.log(data)
                alert(res.data.msg);
                if (data.role === 'teacher') {
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("department", res.data.d[0].department);
                    // sessionStorage.setItem("semester", res.data.d[0].semester);
                    sessionStorage.setItem("subject", res.data.d[0].subject);
                    sessionStorage.setItem("password", res.data.d[0].password);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/teacher22");

                } else if (data.role === 'student') {
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("email", res.data.d[0].email);
                    sessionStorage.setItem("department", res.data.d[0].department);
                    sessionStorage.setItem("semester", res.data.d[0].semester);
                    sessionStorage.setItem("subjects", res.data.d[0].subjects);
                    sessionStorage.setItem("password", res.data.d[0].password);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/student");

                } else if (data.role === 'admin') {
                    sessionStorage.setItem("email", res.data.d[0].email);
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("password", res.data.d[0].password);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/viewstudentdata");

                }

            }).catch((error) => {
                console.log(error)
                console.log(data)
            })

        } else {
            alert("please fill data")
        }
    }


    return (

        <>
            <div className="log">
                <img className='loginimg' src={require("../Assets/Images/img1.jpg")} alt="" />
                <div className="login-form">
                    <h2 className='welcome-h2'>Welcome to the portal</h2>



                    <div className="form">




                        <input type="text" className='form-input' name='email' onChange={HandleInput} placeholder='Enter your email' /><br />
                        <input type="text" className='form-input' name='password' onChange={HandleInput} placeholder='Enter your password' />

                        <label className='select-drop'>Login as:</label>          <br />

                        <select name="role" className='form-input' onChange={HandleInput}>
                            <option>Select Role</option>
                            <option value="admin">admin</option>
                            <option value="teacher">teacher</option>
                            <option value="student">student</option>

                        </select>
                        <button className='form-btn' onClick={Submit} >Submit</button>

                    </div>











                </div>


            </div>

        </>
    )

}
