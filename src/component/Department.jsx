import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import topImg from './../resources/Layer 555.png'
import dpimg from './../resources/Vector Smart Object.png'
import dpimg1 from './../resources/Vector Smart Object1.png'
import dpimg2 from './../resources/Vector Smart Object (1).png'

const Department = () => {
    return (
        <>
            <Container fluid>
                <img id='dpimg' src={topImg} alt="" />
                <Container >

                    <Container className='text-center '>


                        <h1 className='text-black'>Our Department</h1>
                        <p id='dp-text-pg'>A hundred thousand grateful loves to your dear papa and mamma. Is your poor brother recovered of his rack-punch? Oh, dear! Oh, dear! How men should beware of wicked punch! </p>
                        <Row lg="12" className='d-flex  flex-column  flex-md-row justify-content-between   mx-auto text-center' >


                            {/* flex-sm-column flex-md-row  */}
                            <Col lg='2' className='mydpcol mt-3  shadow-lg  w-md-100' id='mydpcol1'>
                                <img src={dpimg} alt="" className='mw-100' />
                                <h3 className='text-white mt-sm-5'>Online Education</h3>

                            </Col>
                            <Col lg='2' className='mydpcol mt-3 shadow-lg' id='mydpcol2'>
                                <img src={dpimg1} alt="" className='mw-100' />
                                <h3 className='text-white mt-sm-5'>Online Education</h3>
                            </Col>
                            <Col lg='2' className='mydpcol mt-3 shadow-lg' id='mydpcol3'>
                                <img src={dpimg2} alt="" className='mw-100' />
                                <h3 className='text-white mt-sm-5'>Online Education</h3>
                            </Col>

                        </Row>
                    </Container>

                </Container >
            </Container >


        </>
    )
}

export default Department