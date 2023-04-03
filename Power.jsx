import React from 'react'
import "./Power.css"
import test from "./assets/pic1.jpeg"

const Power = () => {
    const one = document.getElementsByClassName("pwrsecinfo");
    const two = document.getElementsByClassName("sec2hd");
    const three = document.getElementsByClassName("sec2dt");
  const Active = (event) => {
    for(let a=0; a<one.length; a++){
      if(one[a].classList.contains("act1")){
        one[a].classList.remove('act1');
      }
      if(two[a].classList.contains("act2")){
        two[a].classList.remove('act2');
      }
      if(three[a].classList.contains("act3")){
        three[a].classList.remove('act3');
      }
    }
    event.currentTarget.classList.add('act1');
  };
  return (
    <div className='power'>
        <div className='pwrfrst'>
            <span className='pwrhd'>About the Program</span>
            <span className='pwrinfo'> 
                Taking action is the first step in any learning experience you require or desire, which is why Coursenetic is here. The flexible program includes courses, all offered for free on our e-learning platform, that you can move through in 6-weeks, as well as support to help you complete them.
            </span>
        </div>
        <div className='pwrsec'>
            <span className='picsec'> 
                <img src={test} alt="img" className='fynimg'/>
            </span>
            <span className='psec2'>
                <span className='pwrsecinfo act1' onClick={Active}>
                    <div className='sec2hd act2'>The Coursentic Curriculum</div>
                    <div className='sec2dt act3'>
                        Enroll in one of the following courses to get started in the Tech world: Full Stack Software Development, UI/UX Design, Digital Marketing, Ethical Hacking, Cyber Security and Virtual Assistance.
                    </div>
                </span>
                <span className='pwrsecinfo' onClick={Active}>
                    <div className='sec2hd'>Broad Based Program Supports</div>
                    <div className='sec2dt'>
                        You may enroll in any course with confidence knowing that you'll receive the best support, have access to a mentor, and even have the chance to intern with Coursenetic.
                    </div>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Power