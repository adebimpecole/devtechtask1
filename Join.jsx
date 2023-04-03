import React from 'react'
import Footer from './Footer'
import "./Join.css"
import team from "./assets/team.jpeg"

const Join = () => {
  return (
    <div className='join'>
        <img className='jnpic' src={team} alt="team"/>
        <span className='jnhd'>Join Us.</span>
        <span className='jnbtn'>See Jobs</span>
        <Footer/>
    </div>
  )
}

export default Join