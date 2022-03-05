import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Images from '../resources/Images.png'

const Limitation = () => {
    return (
        <>

            <Container fluid className='mt-5' id='Limitaion'>

                <Container className='d-flex flex-column  flex-lg-row '>
                    <Col lg={6} >

                        <img src={Images} alt="" className='w-100 ' />
                    </Col>
                    <Col lg={6} className='my-auto px-sm-5'>
                        <h1 className='text-black'>Limitless learning, more
                            possibilities</h1>
                        <p>
                            The University of Rochester is one of the country's top-tier research universities. Our campuses are home to 200 academic majors, more than 2,000 faculty and instructional staff, and some 10,000 students—approximately half of whom are women.
                        </p>

                        <p className='mt-sm-5'>
                            Learning at the University of Rochester is also on a very personal scale. Rochester remains one of the smallest and most collegiate among top research universities, with smaller classes, a low 10:1 student to teacher ratio, and increased interactions with faculty.


                        </p>



                        <Container className='d-flex '>
                            <Col className='text-warning'>

                                <h3 className='limitation-text-h3'>4000</h3>
                                <h6>Students</h6>
                            </Col>
                            <Col className='text-primary'>
                                <h3 className='limitation-text-h3'>260</h3>
                                <h6>Courses</h6>
                            </Col>
                            <Col className='text-success'>
                                <h3 className='limitation-text-h3' >5679</h3>
                                <h6>Hours Video</h6>
                            </Col>
                        </Container>








                    </Col>


                </Container>

            </Container>
        </>
    )
}

export default Limitation