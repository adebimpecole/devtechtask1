import React from 'react'
import "./About.css"
import Navbar from './Navbar'
import { AiOutlineAim } from "react-icons/ai";
import { BsGlobe2, BsPeople } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className='about'>
        <Navbar/>
        <span className='abouthd'>About Us</span>
        <span className='aboutinfo'>
            Taking action is the first step in any learning experience you require or desire, which is why Coursenetic is here. The flexible program includes courses, all offered for free on our e-learning platform, that you can move through in 6-weeks, as well as support to help you complete them.
        </span>
        <span className='aboutdets'>
            <span className='detssec'>
                <BsPeople className='icon'/>
                <span className='subhd'>Employees</span>
            </span>
            <span className='detssec'>
                <BsGlobe2 className='icon'/>
                <span className='subhd'>One Mission</span>
            </span>
            <span className='detssec'>
                <AiOutlineAim className='icon'/>
                <span className='subhd'>One Vision</span>
            </span>
        </span>
    </div>
  )
}

export default AboutUs