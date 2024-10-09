import React, { useRef } from 'react'
import './Contact.css'

// import icons 
import { FaInstagram } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


// import emailjs 

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r82uxhs', 'template_iueld3l', form.current, 
        'aYLvBVyNzkFFivnRe',
      )
      e.target.reset()
     
  
  };


  return (
    <section id='contact' className='contact section container'>
          <div className='sectionTitle'>
        <span className='titleNumber'></span>
        <h5 className='titleText'>Contact
          <div className='underline'><span></span></div>
        </h5>
      </div>
      
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
              <FaInstagram  className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                hazem__miri
              </span>
              <div>
                <a href='https://www.instagram.com/hazem__miri?' className='flex'>
                Send Message
                <TbArrowBigRightLinesFilled  className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
              <FaLinkedin   className='icon'/>
              </div>
              <h4>Linkedin </h4>
              <span className="userName">
                hazem__miri
              </span>
              <div>
                <a href='https://www.linkedin.com/in/hazem-miri/' className='flex'>
                Send Message
                <TbArrowBigRightLinesFilled  className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
              <MdOutlineMail   className='icon'/>
              </div>
              <h4>Email </h4>
              <span className="userName">
                hazem__miri
              </span>
              <div>
                <a href='https://email:hazemmiri1989@gmail.com' className='flex'>
                Send Message
                <TbArrowBigRightLinesFilled  className='icon'/>
                </a>
              </div>
            </div>
          
          
          </div>
        </div>

        <div className="form grid">
          <h3>Send me email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Enter your Name' name='name'/>
            <input type='Email' placeholder='Enter your Name'name='email'/>
            <textarea name='message' placeholder='Enter your message'></textarea>
            <button className='formBtn' type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>
      </div>





    </section>
  )
}

export default Contact