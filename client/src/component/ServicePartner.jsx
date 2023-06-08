import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function ServicePartner() {
  return (
    <div>
      <div className='Service_partner bg-info pt-5'>
                <Container>
                    <Row>
                        <div >
                            <h2 className='border-start border-warning border-5 px-2'>Service partner different from the rest</h2>
                        </div>
                    </Row>

                    <Row id='row1'>
                        <Col md='6'>
                            <br />
                            <p>
                                We’re your full-service digital team obsessed with
                                helping you make smart investments and reduce time-to-launch.
                            </p>
                            <br />
                            <p>
                                Our team of experts specializes in
                                designing experiences, building products,
                                and scaling technology with flexible
                                engagement models, outside-in views,
                                bespoke solutions, and a succession
                                of early wins while never losing sight
                                of the big picture.
                            </p>
                        </Col>
                        <Col md='6'>
                            <div>
                                <p>
                                    <b className='fs-3'> 100%</b> client retention since day one
                                </p>
                                <p>
                                    <b className='fs-3'> 40+</b> iconic & Fortune 500 clients
                                </p>
                                <p>
                                    <b className='fs-3'>  20+ </b>industry awards & distinctions
                                </p>
                                <NavLink to='/about' className='Link text-decoration-none'>
                                <p><b  className='border-bottom border-warning border-3'>&#x2192; Learn more about us</b></p>
                               
                                </NavLink>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

    </div>
  )
}

export default ServicePartner
