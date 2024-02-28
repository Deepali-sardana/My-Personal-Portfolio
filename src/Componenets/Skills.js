import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import { FaGithub, FaLinkedin,FaInstagram, FaEnvelope } from 'react-icons/fa';
export default function Skills() {
    return (
        <>
            <div className='skill-set'>
                <h1 className='skill-heading'>
                    My Skill Set
                </h1>
                <Container className='skill-icon'>
                    <Row xs={1} sm={2} lg={4}  className="justify-content-center py-4">
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-solid fa-c fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "60%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                <i class="fa-solid fa-c fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "60%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col >
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-java fa-2xl" ></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "50%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-python fa-2xl" ></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "70%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-4"  xs={1} sm={2} lg={4} >
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card '>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-html5 fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "85%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-css3-alt fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "60%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-js fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "60%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} md={3} className='myskills py-2'>
                            <Card className='transparent-card'>
                                <Card.Body className='tech-icon'>
                                    <i class="fa-brands fa-react fa-2xl"></i>
                                    <div class="progress" role="progressbar"
                                        aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: "50%" }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                {/* find me on */}
                <div className='contact '>
                    <h3>Feel <span style={{color:"#21bdbf"}}>free</span> to reach out</h3>
                    <div className="social-icon">
                    <a href='https://github.com/Deepali-sardana' target=' ' ><FaGithub /></a>
      <a href='https://www.linkedin.com/in/deepali-sardana-592aa3238/' target=' '><FaLinkedin /></a>
      <a href='https://www.instagram.com/'><FaInstagram/></a>
      <a href='mailto:deepalisardana1234@gmail.com'><FaEnvelope/></a>
    </div>
                </div>
            </div>
        </>
    )
}
