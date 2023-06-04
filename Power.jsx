import React, {useState} from 'react'
import "./Power.css"
import test1 from "./assets/techmission.jpg"
import test2 from "./assets/techvision.jpg"

const Power = () => {
    const one = document.getElementsByClassName("pwrsecinfo");
    const two = document.getElementsByClassName("sec2hd");
    const three = document.getElementsByClassName("sec2dt");

    let [setpic, getpic] = useState(test1)

  const Active = (event) => {
    for(let a=0; a<one.length; a++){
      if(one[a].classList.contains("act1")){
        one[a].classList.remove('act1');
        getpic(test1)
      }
      if(two[a].classList.contains("act2")){
        two[a].classList.remove('act2');
        getpic(test2)
      }
      if(three[a].classList.contains("act3")){
        three[a].classList.remove('act3');
      }
    }
    event.currentTarget.classList.add('act1');
    Pic(event);
  };

  const Pic = (event) => {
    if(event.currentTarget.classList.contains("mis")){
      getpic(test1);
    }
    if(event.currentTarget.classList.contains("vis")){
      getpic(test2);
    }
  }

  return (
    <div className='power'>
        <div className='pwrfrst'>
            <span className='pwrhd'>About the Program</span>
            <span className='pwrinfo'> 
              We sought to help youths who have tech passion to achieve their dream by giving them the required knowledge and empowerment. We also have various services to offer companies which would help in the security development of the company. 
            </span>
        </div>
        <div className='pwrsec'>
            <span className='picsec'> 
                <img src={setpic} alt="img" className='fynimg'/>
            </span>
            <span className='psec2'>
                <span className='pwrsecinfo mis act1' onClick={Active}>
                    <div className='sec2hd act2'>Our Mission</div>
                    <div className='sec2dt act3'>
                      Our mission is to transform the world, we want to use the aid of AI to transform the world and create more awareness of technology and also to help in the development youths across the world..

                    </div>
                </span>
                <span className='pwrsecinfo vis' onClick={Active}>
                    <div className='sec2hd'>Our Vision</div>
                    <div className='sec2dt'>
                      Our vision is to be one of the top 5 best tech companies in the world by 2025, we will never stop engaging as it's what we are dedicated for.
                    </div>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Power