import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Home from './Home'
import { FaGithub } from 'react-icons/fa6'
export default function Project() {
  return (
    <>
    <section >
        <Container className='project'>
            <Home/>
            <Container className='about-project'>
                <h1 className='project-heading'>
                    Project
                </h1>
                <p>Coding Dreams into Reality <strong><span style={{color:"#21bdbf"}}>Building </span></strong> 
                Tomorrow's Solutions Today 💻🛠️</p>
                <Row className='project-detail'>
                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="portfolio.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Personal Portfolio</h1>
      <p className='card-info'>I have created my portfolio wwhich have all the information
      about me .I have used Reactjs to build this project </p>
       <a href="https://github.com/Deepali-sardana/My-Personal-Portfolio" target=' '>
        <FaGithub className='social-icon'/></a>
    </div>
    </div>
                    </Col>

                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="voiceassistant.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Voice Assistant</h1>
      <p className='card-info'>I have created Voice assiatant using python modules 
      which take some command and react accordding to it it is specially for my pc in which i have 
      given the path of few applications present in my pc</p>
   <a href="https://github.com/Deepali-sardana/python-projects/blob/main/jarvis_voice_assistant.py" target=' '>
    <FaGithub className='social-icon'/></a>
    </div>
    
    </div>
                    </Col>
                   

                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="python.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Small Python Projects</h1>
      <p className='card-info'>I have created some small python projects
      like gui calculator,gui digital clock,image resizer,qr code generator,tambola game,and 
      guo dice simulator these are beginner friendly projects</p>
    <a href='https://github.com/Deepali-sardana/python-projects' target=' '>
        <FaGithub className='social-icon'/></a>
    </div>
    
    </div>
                    </Col>
                   

                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="clone.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Project</h1>
      <p className='card-info'>loremLorem ipsum dolor sit amet
       consectetur adipisicing elit. Similique sit facere 
       placeat sequi, amet illo nulla at, ab sapiente ex id tempore 
       eligendi odio, quo mollitia ut aspernatur! Ex, sit? 
       abdndhdhshsdhsbHBHJBHBBXBHSXBHBHBCHBHBHnjknljk</p>
    <FaGithub className='social-icon'/>
    </div>
    
    </div>
                    </Col>
                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="study.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Project</h1>
      <p className='card-info'>loremLorem ipsum dolor sit amet
       consectetur adipisicing elit. Similique sit facere 
       placeat sequi, amet illo nulla at, ab sapiente ex id tempore 
       eligendi odio, quo mollitia ut aspernatur! Ex, sit? 
       abdndhdhshsdhsbHBHJBHBBXBHSXBHBHBCHBHBHnjknljk</p>
   <FaGithub className='social-icon'/>
    </div>
    
    </div>
                    </Col>
                   

                    <Col md={4} className='project-content' >
                    <div className='card1'>
      
      <img src="study.jpg" className='card-img' alt=''></img>
      <div className='card1-body'>
      <h1 className='card-title'>Project</h1>
      <p className='card-info'>loremLorem ipsum dolor sit amet
       consectetur adipisicing elit. Similique sit facere 
       placeat sequi, amet illo nulla at, ab sapiente ex id tempore 
       eligendi odio, quo mollitia ut aspernatur! Ex, sit? 
       abdndhdhshsdhsbHBHJBHBBXBHSXBHBHBCHBHBHnjknljk</p>
       <FaGithub className='social-icon'/>
    </div>
    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>
    </>
  )
}
