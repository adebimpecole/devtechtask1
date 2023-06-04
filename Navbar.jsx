import React from 'react'
import logo from "./assets/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='lftnav'>
            <img className='logo' alt='logo' src={logo}/>
        </div>
        <div className='rgtnav'>
            <span className='rgtcnt'>ABOUT US</span>
            <span className='rgtcnt dis'>SERVICES</span>
            <span className='rgtcnt'>ENROLL</span>
            <span className='rgtcnt'>CONTACT US</span>
        </div>
    </div>
  )
}

export default Navbar