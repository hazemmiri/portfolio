import React, {useState} from 'react'
import './Navbar.css'
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {


  // code to toggle on, and off the navbar at smal width.

  const [active, setActive] = useState('navBar')

  
  // this will bring in the navbar from the top 

  const showNavBar = () =>{
    setActive('navBar activeNavBar')
  }

  // this will  hide the navbar again

  const removeNavBar = () =>{
    setActive('navBar ')
  }



  // code statement bto add background color to headeer.

  const [activeHeader, setactiveHeader] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >=10){
      setactiveHeader('header activeHeader')
    }
    else{
      setactiveHeader('header')
    }
  }

  window.addEventListener('scroll',addBg)



  return (
    <header className={activeHeader}>
      <div className='logoDiv'>
        <h1 className='logo'><a href='#home'>Miri.</a>
        {/* <div className='leftIcons'>
        <a href='https://github.com/' className='socials grid'>
        <FaGithub className='icon' />
        </a>
        <a href='https://www.instagram.com/hazem__miri?' className='socials grid'>
        <FaInstagram className='icon' />
        </a>
        <a href='https://www.linkedin.com/in/hazem-miri/' className='socials grid'>
        <FaLinkedin  className='icon' />
        </a>
        </div> */}
        </h1>
      </div>
      <div className={active}>
        <ul onClick={removeNavBar} className='navLists'>
          <li className='navItem'>
          <a href='#about' className='navLink'>
            <span className='headerNumber'>1. </span> About
          </a>
            </li>
            <li className='navItem'>
          <a href='#skill' className='navLink'>
            <span className='headerNumber'>2. </span> Skills
          </a>
            </li>
            <li className='navItem'>
          <a href='#project' className='navLink'>
            <span className='headerNumber'>3. </span > Project
          </a>
            </li>
            <li className='navItem'>
          <a href='#contact' className='navLink'>
            <span className='headerNumber'>4. </span> Contact
          </a>
            </li>
            <button className='btn'>
              <a href=''> Resume</a>
            </button>
            </ul>  
            <div onClick={removeNavBar} className='closNavBar'>
            <IoIosCloseCircle className='icon'/>
            </div>

         
            
      </div>

      <div onClick={showNavBar } className='toggleNavBar'> 
      <PiDotsNineBold  className='icon'/>
      </div>

    </header>
  )
}

export default Navbar