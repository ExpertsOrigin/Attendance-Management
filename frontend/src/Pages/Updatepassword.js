import React, { useState } from 'react'
import axios from 'axios'

export default function Updatepassword() {

    const [data,setdata] = useState();

const handleinput = (e)=>{
setdata({
    ...data, [e.target.name]: e.target.value
})
}

    const updatepassword = ()=>{
    if(data.email !== undefined && data.password !== undefined && data.newpassword !== undefined){
        axios.post("http://localhost:4000/updatepassword",{data}).then((res)=>{
        alert(res.data)
        window.location.reload();
        }).catch((error)=>{
        console.log(error)
        })
    }
    }



  return (
<>
<div className="teacherupdate">
                <input type="text" name="email" id="" placeholder='email' onChange={handleinput}/><br />
                <input type="text" name="password" id="" placeholder='Old Password' onChange={handleinput} /><br />
                <input type="text" name="newpassword" id="" placeholder='New Password' onChange={handleinput} /><br />
                <button className="tbtn" onClick={updatepassword} type="submit">Submit</button>
            </div>

</>
  )
}
