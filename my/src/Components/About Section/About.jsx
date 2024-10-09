import React from 'react'
import './About.css'
import { BiCloudDownload } from "react-icons/bi";
import img from '../../hazem__miri/1.jpg'

function About() {
  return (
    <section id='about' className='about section container'>


      <div className='sectionTitle'>
        <span className='titleNumber'></span>
        <h5 className='titleText'>About Me 
          <div className='underline'><span></span></div>
        </h5>
      </div>
      

       <div className='sectionContent grid'>
        <div className='textSection'>
          
          <h4>
          I am a student passionate about Full Stackdevelopment,
           with a strong educational backgroundand a desire to gain practical experience in the field.Having recently graduated with a diploma in FullStack JavaScript Development,
            I am eager to applymy knowledge and make meaningful contributions toreal-world projects.
          </h4>

          <div className='aboutBtn'>
            <a href='../' download='Hazem Ben Slimen.pdf' className='flex'>
              Download CV <BiCloudDownload  className='icon'/>
            </a>
          </div>
        </div>

        <div className='aboutImgDiv'>
          <img src={img} alt='Hazem__Miri' className='aboutImg'/>
        </div>
       </div>
    </section>
  )
}

export default About