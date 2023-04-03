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
            <span className='rgtcnt dis'>HOW IT WORKS</span>
            <span className='rgtcnt'>ABOUT</span>
            <span className='rgtcnt dis'>FAQs</span>
            <span className='rgtcnt'>ENROLL</span>
            <span className='rgtcnt'>CONTACT</span>
        </div>
    </div>
  )
}

export default Navbar