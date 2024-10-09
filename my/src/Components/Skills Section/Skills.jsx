import React from 'react'
import './Skills.css'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiSass } from "react-icons/di";
import { SiCss3, SiHtml5  } from "react-icons/si"; 
import { TbBrandNodejs } from "react-icons/tb";
import { FaBootstrap , FaWordpress} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiExpress, SiMongodb  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";




function Skills() {
  return (
    <section id='skill' className='skills container section'>

      <div className='sectionTitle'>
        
        <h5 className='titleText'> Skills
          <div className='underline'><span></span></div>
        </h5>
      </div>
      {/* skills container */}

      <div className='skillsContainer grid'>
        
        {/* single Groupe of skills */}


        <div className='skillsGroup'>
          <div className='groupTitle'>
            <h2 className='title'>Web Developoment</h2>
            <span className='subTitle'></span>
          </div>

          <div className='generallSkills'>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <SiHtml5 className='icon' />
                 </div>
                 <span className='skillsName'>HTML</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <SiCss3  className='icon' />
                 </div>
                 <span className='skillsName'>Css</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <DiSass className='icon' />
                 </div>
                 <span className='skillsName'>Sass</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <FaBootstrap   className='icon' />
                 </div>
                 <span className='skillsName'>Bootstrap</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <SiMui   className='icon' />
                 </div>
                 <span className='skillsName'>Material UI</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <IoLogoJavascript  className='icon' />
                 </div>
                 <span className='skillsName'>JavaScript</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <FaReact  className='icon' />
                 </div>
                 <span className='skillsName'>React</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <TbBrandNodejs  className='icon' />
                 </div>
                 <span className='skillsName'>NodeJs</span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <SiExpress   className='icon' />
                 </div>
                 <span className='skillsName'>Express </span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <SiMongodb   className='icon' />
                 </div>
                 <span className='skillsName'>Mongodb </span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <FaWordpress   className='icon' />
                 </div>
                 <span className='skillsName'>Wordpress </span>
            </div>
            <div className='singlSkills'>
              <div className='iconBox flex'>
              <GrMysql    className='icon' />
                 </div>
                 <span className='skillsName'>Mysql  </span>
            </div>
            
            
            

          </div>
        </div>
      </div>




    </section>
  )
}

export default Skills