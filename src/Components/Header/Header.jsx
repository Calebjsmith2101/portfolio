import './Header.css'

import CTA from './CTA'
import Caleb from '../../Assets/Caleb.jpg'
import HeaderSocials from './HeaderSocials'
import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Caleb Smith</h1>
      <h5 className="text-light">I build things for the web.</h5>
      {/*<CTA />*/}
      <HeaderSocials />
      <div className='me'>
        <img src={Caleb} alt="me" className='Caleb' />
      </div>

      <a href="#contact" className='scroll_down'>Scroll to bottom</a>
      </div> 
    </header>
  )
}

export default Header