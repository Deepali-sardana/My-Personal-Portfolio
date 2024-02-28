import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin,FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Design.css'
import { Container, Row, Col } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Skills from './Skills';

export default function Home1() {
  return (
    <>
      <section>
        <Container className='home-section'>
          <Home />
          <Container className='home-content'>
            <Row>
              <Col md={7} className='content'>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hii!!
                  <span className="handwave" role="img" aria-labelledby="wave">
                    👋
                  </span>
                </h1>
                <h1 className='heading-content'>
                  I'M
                  <strong className='name-content'>DEEPALI SARDANA</strong>
                </h1>
                <h1 className='effect' style={{paddingBottom:15,paddingLeft:45}}>
                  and I'm
                  <div className='typeeffect'>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Programmer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Python Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Learner")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Web Developer")
                          .start();
                      }}
                    />
                    </div>
                    </h1>
                    <div className="social-icons">
                      
      <a href='https://github.com/Deepali-sardana' target=' ' ><FaGithub /></a>
      <a href='https://www.linkedin.com/in/deepali-sardana-592aa3238/' target=' '><FaLinkedin /></a>
      <a href='https://www.instagram.com/'><FaInstagram/></a>
      <a href='mailto:deepalisardana1234@gmail.com'><FaEnvelope/></a>
    </div>
    <br/>
    <div className='resume'>
    <a href='Deepali-Resume.pdf' target=' '><button type="button" class="btn btn-light"><strong>Resume</strong></button></a>
    </div>
                
              </Col>
              <Col md={5}>
                <img className='girl-img' src="girl.png" alt='' style={{ width: '100%' }}></img>
              </Col>
            </Row>
          </Container>
        </Container>
        <About/>
        <Skills/>
      </section>
    </>
  )
}
