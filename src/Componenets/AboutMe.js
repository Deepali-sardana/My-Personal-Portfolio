import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Home from './Home'
import './Design.css'
import { FaHandPointRight } from "react-icons/fa6"
export default function AboutMe() {
  return (
    <div>
      <section>
        <Container className='about-myself'>
          <Home />
          <Container className='about-myself-content'>
            <Row>
              <Col md={7} className='left-section'>
                <h1 className="about-myself-heading">KNOW MORE ABOUT ME</h1>
                <br />
                <p>Hello, I'm Deepali, a student currently pursuing a Bachelor of Technology (B.Tech)
                  degree at IP University. I'm passionate about the field of technology and constantly
                  strive to expand my knowledge and skills in this ever-evolving domain.Iam looking forward to
                  exploring and contributing to the world
                  of engineering and technology.</p>
                <br />
                <div className='education'>
                  <h4 className='education-heading'>My education</h4>
                  <br/>
                  <ul className='education-list'>
                    <li>Class 10<sup>th</sup> 👩 from Nalanda Modern Public School 
                    <br/>
                    Percentage:78% 
                    </li>
                    <br/>
                    <li>Class 12<sup>th</sup> 👩 from Nalanda Modern Public School 
                    <br/>
                    Percentage:80%
                    </li>
                    <br/>
                    <li>B.Tech(CSE) 👩‍🎓 from Guru Gobind Singh Indraprastha University
                    <br/>
                    CGPA:9.06(upto 7th semester)
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={5} className='right-section'>
                <img src='about.png' alt='' style={{ width: '100%' }}></img>
              </Col>
            </Row>
          <div className='experience'>
            <Row>
              <Col md={5}>
                <img src='study.jpg' alt='' className='experience-img'></img>
              </Col>
              <Col md={7}>
                  <h2 className='my-experience'>
                    Experience
                  </h2>
                  <p className='about-internship'>During my internship at B2World, a  startup IT company, I assumed the role of 
                    a full-stack web developer. Over the course of my tenure, I spearheaded the development 
                    of their official website from inception to completion. Leveraging my skills in both 
                    front-end and back-end development, I ensured a seamless user experience 
                    while implementing innovative features to enhance functionality. Collaborating 
                    closely with the team, I integrated cutting-edge technologies to create a 
                    responsive and visually appealing website that accurately reflected B2World's brand identity. 
                    This experience not only honed my technical prowess but also instilled in me a
                     deep understanding of the intricate workings of a startup environment.</p>
                     <p>
                     <FaHandPointRight className='hand-icon'/>
                      Certificate: <a href='internship-certificate.png' target=' 
                      ' className='custom-link'>Link</a>
                     </p>
                     <p>
                     <FaHandPointRight className='hand-icon'/>
                      Website Link: <a href='https://b2world.tech/' target=' ' className='custom-link'>Link</a>
                     </p>
                     </Col>
                     </Row>
                </div>
        </Container>
        </Container>
      </section>
    </div>
  )
}

