import './Testimonials.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
import { Pagination } from 'swiper';
import React from 'react'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet illo hic pariatur sapiente placeat expedita'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet illo hic pariatur sapiente placeat expedita'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet illo hic pariatur sapiente placeat expedita'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet illo hic pariatur sapiente placeat expedita'
  },
]
  
  const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
      data.map(({avatar, name, review}, index) => {
       return (
        <SwiperSlide key={index} className='testimonial'>
        <div className="client_avatar">
          <img src={avatar}/>
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
          {review}
          </small>
      </SwiperSlide>
       )
      })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials