import React, { useState } from 'react'
import '../Assets/Styles/Dashboard.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import Offcanvas from 'react-bootstrap/Offcanvas';




export default function Dashboard2() {

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

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Teacher</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='side-links'>
          
          <br />

         <Link className='dash-links' to={'/Dashboard'} >Dashboard</Link><br />
          <Link className='dash-links' to={'/teacher'} >Mark student attendance</Link><br />
          <button onClick={Logout}>Logout</button>

        </Offcanvas.Body>
      </Offcanvas>
    
    
    
    </>
  )
}
