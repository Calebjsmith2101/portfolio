import './Services.css'

import {BiCheck} from 'react-icons/bi'
import React from 'react'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
          <h3>UI/UX Design</h3>
          </div>
          
          <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          </ul>
        </article>
        {/* Web developemnt */}
        <article className="service">
          <div className="service_head">
          <h3>Web Development</h3>
          </div>
          
          <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          </ul>
        </article>
        {/* Web developemnt */}
        <article className="service">
          <div className="service_head">
          <h3>Content Creation</h3>
          </div>
          
          <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service_list-icon" />
            <p>lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          </ul>
        </article>
        {/* Web developemnt */}
      </div>
    </section>
  )
}

export default Services