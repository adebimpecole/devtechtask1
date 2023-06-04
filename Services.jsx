import React from 'react'
import './Seervices.css'
import box from "./assets/box.jpg"

const Services = () => {
  return (
    <div className='service'>
        <span className='boxpic'> 
            <img src={box} alt="img" className='srimg'/>
        </span>
        <div className='srpic'>
            <span className='srhd'>Services</span>
            <span className='srdiv'>
                <span>We offer varieties of tech courses such as;</span>
                <ul>
                    <li className='subser'>Full Stack Software development</li>
                    <li className='subser'>UI/UX design</li>
                    <li className='subser'>Ethical Hacking</li>
                    <li className='subser'>Cyber Security</li>
                    <li className='subser'>Digital Marketing</li>
                    <li className='subser'>Full Stack Software Engineering</li>
                    <li className='subser'>Web development</li>
                    <li className='subser'>Machine Learning</li>
                    <li className='subser'>Artificial intelligence</li>
                    <li className='subser'>Cloud Computing</li>
                    <li className='subser'>Data Analysis</li>
                    <li className='subser'>Data Science</li>
                    <li className='subser'> Virtual Assistance etc</li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default Services