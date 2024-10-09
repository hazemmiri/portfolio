import React from 'react'
import './Project.css'
import { FaGithub, FaInstagram  } from "react-icons/fa";


const data = [

  {
    id: 1,
    image: 'https://xdfile.com/wp-content/uploads/2020/02/developer-portfolio-xd-template.jpg' ,
    github: 'https://github.com/hazemmiri/MERN-PORTFOLIO' ,
    instagram:'https://www.instagram.com/hazem__miri?',
    liveLink:'',
    title: 'MERN-PORTFOLIO',
    desc: 'une compilation de documents qui illustrent vos convictions, vos compétences, vos qualifications, votre éducation, votre formation et vos expériences.',
    teche1: 'MongoDB',
    teche2:'Express',
    teche3:'Reactjs',
    teche4: 'NodeJs'
  },
  {
    id: 2,
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*7HQeV6mTCjcy6RiYWmwq-w.png' ,
    github: 'https://github.com/hazemmiri/app-media' ,
    instagram:'https://www.instagram.com/hazem__miri?',
    liveLink:'',
    title: 'social media ',
    desc: 'Create Social Media Application  MERN STACK technologies',
    teche1: 'MongoDB',
    teche2:'Express',
    teche3:'Reactjs',
    teche4:'NodeJs',
  },
  // {
  //   id: 3,
  //   image: '' ,
  //   github: '' ,
  //   title: '',
  //   desc: '',
  //   teche1: '',
  //   teche2:'',
  //   teche3:'',
  // },
  // {
  //   id: 4,
  //   image: '' ,
  //   github: '' ,
  //   title: '',
  //   desc: '',
  //   teche1: '',
  //   teche2:'',
  //   teche3:'',
  // },
  // {
  //   id: 5,
  //   image: '' ,
  //   github: '' ,
  //   title: '',
  //   desc: '',
  //   teche1: '',
  //   teche2:'',
  //   teche3:'',
  // }





]



const Project = () => {
  return (
    <section id='project' className='project container section'>

<div className='sectionTitle'>
        <span className='titleNumber'></span>
        <h5 className='titleText'>Project
          <div className='underline'><span></span></div>
        </h5>
      </div>
      
      <div className='projectContainer grid'>
        {
            
           data.map(({id, image, github, instagram, liveLink, title, desc, teche1,   
            teche2, teche3, teche4}) => {
           
               return (
                <>

                <div key={id} className='singelProject'>
                  <div className='externalLinks flex'>
                    <div className='githubIcon'>
                      <a href={github} target='_blank'>
                      <FaGithub className='icon' />
                         </a>
                    </div>

                    <div className='instagramIcon'>
                      <a href={instagram} target='_blank'>
                      <FaInstagram className='icon' />
                         </a>
                    </div>
                  </div>

                  <div className='imageDiv'>
                      <a href='' target='_blank'>
                       <img src={image} alt={title} />
                         </a>
                    </div>

                    <div className='projectTitle'>
                      <h3>{title}</h3>
                    </div>

                    <div className='desc'>
                      {desc}
                    </div>

                    <div className='technologies flex'>
                      <small>{teche1}</small>
                      <small>{teche2}</small>
                      <small>{teche3}</small>
                      <small>{teche4}</small>
                    </div>





                </div>
                
                
                </>

               )

           })

        }

      </div>


      
    </section>
  )
}

export default Project