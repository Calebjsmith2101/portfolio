import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
<a href="https://www.linkedin.com/in/calebjsmith2101/" target="_blank"><BsLinkedin /></a>
<a href="https://github.com/Calebjsmith2101" target="_blank"><FaGithub /></a>
<a href="https://twitter.com/calebjsmithio" target="_blank"><AiFillTwitterCircle className='twitter_socials' /></a>
    </div>
  )
}

export default HeaderSocials