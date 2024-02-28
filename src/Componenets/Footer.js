import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    let date = new Date();
  let year = date.getFullYear();
    return (
        <>
            <Container fluid className='footer'>
                <Row>
                    <Col md={4}>
                        Developed by Deepali
                    </Col>
                    <Col md={4}>
                    Copyright @ {year}: DS<i class="fa-solid fa-headset fa-lg" style={{color:"#21BDA9"}}></i>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
