import React from 'react'
import "./About.css"
import Navbar from './Navbar'
import sample from "./assets/vid.mp4"

const AboutUs = () => {
  return (
    <div className='about'>
        <Navbar/>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        <span className='abouthd'>About Us</span>
        <span className='aboutinfo'>
            Blue Devtech Solutions LLC is the parent company of Coursenetic, Flexi Remote and Dammy's Tech which are technology companies, our core aim and objective is to use theknowledge of modern technology to develop different softwares and apps. We also want to impact knowledge of different skills in several fields into the youths across the Globe. We also offer different tech services like Web development, app development, Blockchain Development etc.
        </span>
        <span className='aboutdets'>
            <span className='detssec'>
                <span className='subceo'>Founder & CEO</span>
                <span className='subhd'>Sulaymaan O. Abubakr</span>
            </span>
            <span className='detssec odrr'>
                <span className='subceo'>Quotes</span>
                <span className='subhd2'>
                  <span>"Be informed and stay active, your tech passion lives in you"</span>
                  <span>" Learn Hard, work easy, that's the discipline"</span></span>
            </span>
        </span>
    </div>
  )
}

export default AboutUs