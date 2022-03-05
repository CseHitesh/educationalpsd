import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import row1img1 from '../resources/Layer 547.png'
import row1img2 from '../resources/Layer 548.png'
import row1img3 from '../resources/Layer 549.png'
import row1img4 from '../resources/Layer 550.png'

import row2img1 from '../resources/Layer 551.png'
import row2img2 from '../resources/Layer 552.png'
import row2img3 from '../resources/Layer 553.png'
import row2img4 from '../resources/Layer 554.png'

const AroundUnivervity = () => {
    return (
        <>

            <Container fluid className='around-univercity border'>
                <Container>

                    <Row className='justify-content-around '>

                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row1img1} alt="" className='auimgrow1  ' />
                            <h4 className='text-black mt-4'> Photoshop CC 2018 Essential  Training</h4>
                            <h4>Graphics Design</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row1img2} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'> Get Started Coding Android  Apps With Kotlin</h4>
                            <h4>Global System</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row1img3} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'> Create Turntable Animations  With Cinema 4D</h4>
                            <h4>Computer & Information </h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row1img4} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'> A Beginner’s Guide to the  New Bootstrap 4 Grid</h4>
                            <h4>Web Development</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>

                    </Row>
                    <Row className='justify-content-around '>

                        <Col  sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row2img1} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'> A Designer’s Guide to Vue.js  Components</h4>
                            <h4>Art Deperments</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row2img2} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'> Code a Swift App With Realm  Mobile Database</h4>
                            <h4>Music</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row2img3} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'>10 Essential Design Tips in  Adobe Illustrator</h4>
                            <h4>Technology Information</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>
                        <Col sm={5} lg={3} className='shadow-lg my-sm-5 mycol'>
                            <img src={row2img4} alt="" className='auimgrow1' />
                            <h4 className='text-black mt-4'>Modern PHP From The  Beginning</h4>
                            <h4>Data Science</h4>
                            <h5 className='mt-4'>Keep reading...</h5>
                        </Col>

                    </Row>


                </Container>




            </Container>

        </>
    )
}

export default AroundUnivervity