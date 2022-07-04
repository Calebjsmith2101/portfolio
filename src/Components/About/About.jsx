import './About.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import ME from '../../Assets/me-about.jpg'
import React from 'react'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      
      <div className="container about_container">
        {/*<div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>*/}
          <div className="about_content">
         {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>*/}
          <p>
          Hello! My name is Caleb and I enjoy creating things that live on the internet.
          My interest in web development started back in 2019 when I decided to try editing
          custom HTML emails — turns out hacking together a custom email taught me
          a lot about HTML & CSS!
          </p><br></br>
          <p>Fast-forward to today, and my main focus these
            days is building accessible, inclusive products and digital experiences at 3P Learning.</p><br></br>
            <p>Here are a few technologies I’ve been working with recently:<span> Javascript | React | Chakra | Typescript</span></p>
         {/* <a href='#contact' className='btn btn-primary'>Lets Talk</a>*/}
        </div>
      </div>
    </section>
  )
}

export default About