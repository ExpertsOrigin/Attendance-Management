import React, { useState } from 'react'
import '../Assets/Styles/Dashboard.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Navigate, useNavigate } from 'react-router-dom';



  

export default function Dashboard1() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const navigate = useNavigate(); 
const Logout = ()=>{
sessionStorage.clear();
navigate("/");
}


  return (
    <>
     <i  variant="primary" onClick={handleShow}>
     <i className="fa-solid fa-bars menuicon"></i>
      </i>

      <Offcanvas  show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='side-links'>
          
          <br />

          <Link className='dash-links' to={'/Viewstudentdata'} >Dashboard</Link><br />
          <Link className='dash-links' to={'/Addnewstudent'} >Add new student</Link><br />
          <Link className='dash-links' to={'/Addnewteacher'} >Add new teacher</Link><br />
        </Offcanvas.Body>
          <button className='Alogoutbtn' onClick={Logout}>Logout</button>
      </Offcanvas>

      
    


    
    
    </>
  )
}
