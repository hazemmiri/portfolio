import React from 'react'
import './Home.css'
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
import { TbArrowBigRightLines } from "react-icons/tb";
import { BiSolidChevronsDown } from "react-icons/bi";

function Home() {
  return (
    <section id='home' className='home section'>
      <div className='leftIcons'>
        {/* <a href='https://github.com/' className='socials grid'>
        <FaGithub className='icon' />
        </a>
        <a href='https://www.instagram.com/hazem__miri?' className='socials grid'>
        <FaInstagram className='icon' />
        </a>
        <a href='https://www.linkedin.com/in/hazem-miri/' className='socials grid'>
        <FaLinkedin  className='icon' />
        </a>
        <div className='line'>

        </div> */}


        {/* homecontainer */}


        <div className='container homeContainet'>
          <span className='introText'>
            Hi my name is ,
          </span>
          <h1 className='title'>
            Hazem__Miri
          </h1>
          <span className='subTitle'>
            I develope scalable web based application and software
          </span>

          <p className='homeParaghraph'>
            I code within requierd coding staandards and styles to serve the exact need.
          </p>
        </div>
        <div className='lowerHomeSectiont' >
         <button className='contactBtn'>
          <a href='#contact' className='flex'>
            Contact Me <TbArrowBigRightLines  className='icon'/> 
          </a>
         </button>
          <div className='scrollDiv'>
            <a href='#about' className='flex'>
             <h6 className='scroll'>Scroll Down</h6>  <BiSolidChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>
      
      {/* right div ,with email address will also be visible at a wider screen only */}
       
       <div className='rightEmail'>
        <div className='emailAddress'>
          {/* <a href='https://email:hazemmiri1989@gmail.com' target='_blank'>
          hazemmiri1989@gmail.com
          </a> */}
        </div>
        {/* <div className='line'></div> */}
       </div>

    </section>
  )
}

export default Home