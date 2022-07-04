import './Contact.css'

import {BsWhatsapp} from "react-icons/bs"
import {MdOutlineEmail} from "react-icons/md"
import React from 'react'
import {RiMessengerLine} from "react-icons/ri"
import emailjs from "emailjs-com";
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_927l3oa', 'template_k06ambp', form.current, 'SfLV6h8QFXVLOE07Z')
       
      e.target.reset()
    };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
       <div className="Contactme">
      <p>Although I’m not currently looking for any new opportunities,
         my inbox is always open.<br></br> Whether you have a question or just 
         want to say hi, I’ll try my best to get back to you!</p>
         </div>
      <div className="container contact_container">
        <div className="contact_options">
         {/* <article className='contact_option'>
          <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>calebjsmith2101@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className='contact_option'>
          <RiMessengerLine className="contact_option-icon"/>
            <h4>Messager</h4>
            <h5>Tutorials</h5>
            <a href="https://m.me/" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+1234567</h5>
            <a href="https://api.whatsapp.com/send?phone+12345678">Send a message</a>
          </article>*/}
  </div>
        {/*End of the contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact