import './Portfolio.css'

import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
import React from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Birthday Reminder',
    github: 'https://github.com/Calebjsmith2101/birthday-reminder',
    demo: 'https://react-projects-1-birthday-reminder.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Our Tours',
    github: 'https://github.com/Calebjsmith2101/tours',
    demo: 'https://react-projects-2-tours.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Our Reviews',
    github: 'https://github.com/Calebjsmith2101/Our-reviews',
    demo: 'https://react-projects-3-reviews.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Accordion',
    github: 'https://github.com/Calebjsmith2101/Accordion',
    demo: 'https://react-projects-4-accordion.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Our Menu',
    github: 'https://github.com/Calebjsmith2101/our-menu',
    demo: 'https://react-projects-5-menu.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Experience',
    github: 'https://github.com/Calebjsmith2101/Experience',
    demo: 'https://react-projects-6-tabs.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      
      <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="{title}" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className="btn" target='_blank'>Github</a>
            <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
      <div className="container portfolio_container">
      </div>
    </section>
  )
}

export default Portfolio