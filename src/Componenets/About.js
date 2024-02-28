import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className='about-me'>
        <Container className='about-content'>
            <Row>
                <Col md={7} className='about-heading'>
                    <h1 className='about-heading-content'>About Me</h1>
                    <p className='about-me-para'>
                        I'm a passionate<strong><span className='about-profile'>Web Developer</span></strong> 
                        Currently I'm pursuing my B.Tech<span className='about-profile'>(Computer Science)</span>
                         from HMR Institute of Technology and Managment ,
                        Guru Gobind Singh Indraprastha University....
                        <span className='scholar-icon'>👩‍🎓</span>
                        <br/>
                        <br/>
                        I'm in final year right now and enjoy exploring new things and implement in real life
                        <span class="rotating-emoji">🌍</span>
                        <br/>
                        <br/>
                        Below is a sample program to illustrate the use of the typewriter-effect
                        <br/>
                        <br/>
                       <Link to='/about'><button type="button" class="btn btn-light">
                        <strong>Know More...</strong></button></Link>
                    </p>
                </Col>
                <Col md={5} className='image-container'>
                <img src="myAvatar.png" alt='' className='round-image flip-on-hover'/>
                <h1 className='my-name'>
                    Deepali Sardana
                </h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
