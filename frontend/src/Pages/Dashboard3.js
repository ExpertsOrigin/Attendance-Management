import React, { useState } from 'react'
import '../Assets/Styles/Dashboard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Addnewteacher from './Addnewteacher'


export default function Dashboard1({state}) {

  

  return (
    <>
    <div className="admin-board">
    <div className="board-sidebar">
        <Link className='admin-links'>Dashboard</Link>
        <Link className='admin-links'>View Your Attendance</Link>
        {/* <Link className='admin-links'>Add new teacher</Link>
        <Link className='admin-links'>View student data </Link>
        <Link className='admin-links'>View teacher data </Link> */}

    </div>
    <div className="admin-dashboard">


    </div>

    </div>
    
    
    
    </>
  )
}
