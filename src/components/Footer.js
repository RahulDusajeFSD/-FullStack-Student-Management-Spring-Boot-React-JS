import React from 'react'
import { Navbar, Col, Container } from 'react-bootstrap'

class Footer extends React.Component
{
    render()
{
    let fullYear = new Date().getFullYear();
    let tdate= new Date().getUTCDate();
        return (
            <Navbar fixed ="bottom" bg="dark" variant="dark">
                <Container>
                <Col lg={12} className="text-center text-muted">

                    <div>
                       {fullYear},{tdate}, All Rights Reserved By Rahul
                    </div>
                </Col>
                </Container>
            </Navbar>
        )
    }
}

export default Footer