import './Footer.css'

import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import React from 'react'
import {RiLinkedinFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
       {/* <li><a href="#services">Services</a></li>*/}
        <li><a href="#portfolio">Portfolio</a></li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/calebjsmith2101/" target="_blank"><RiLinkedinFill className='twitter_socials' /></a>
<a href="https://github.com/Calebjsmith2101" target="_blank"><FiGithub className='twitter_socials'/></a>
<a href="https://twitter.com/calebjsmithio" target="_blank"><IoLogoTwitter className='twitter_socials' /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Caleb Smith. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer