import React from 'react'
import { Col, Container } from 'react-bootstrap'
import myimg from './../resources/footerLogo.png'


import { BsTwitter, BsLinkedin, BsApple } from "react-icons/bs";

import { FaFacebookSquare, FaSkype, FaPinterestSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>


            <Container fluid className='my-footer h-100 '>
                <Container className='d-flex flex-column  flex-md-row'>
                    <Col lg={3} className='py-5'>
                        <img src={myimg} alt="" />
                        <p>Edumodo focuses on creating magnificent education websites with</p>
                        <Container className='d-flex  justify-content-around' id="ft-icons">

                            <a href="#">  <BsTwitter /></a>
                            <a href="#">  <BsLinkedin /></a>
                            <a href="#">
                                <FaFacebookSquare style={{ fill: "#2194b7" }} /></a>
                            <a href="#">
                                <FaPinterestSquare /></a>
                            <a href="#">
                                <BsApple /></a>



                        </Container>
                    </Col>
                    <Col lg={4} className='pt-sm-5'>
                        <p className='text-white'>
                            <b>FEATURED PROGRAMS</b>
                        </p>
                        <p>Fixed responsive issue - Just Now  </p>
                        <p>  New portfolio grid layout - Today </p>

                        <p>


                            Tested & approved WP 3.6 - 5 Hours Ago

                        </p>
                        <p>




                            Fixed google map issue - Yesterday

                        </p>





                    </Col>
                    <Col lg={3} className='pt-5'>

                        <p className='text-white'>
                            <b>Learning</b>
                        </p>










                        <p>     Our Plans </p>
                        <p>               Free Trial </p>

                        <p>

                            Academic Solutions

                        </p>
                        <p>



                            Business Solutions

                        </p>
                    </Col>
                    <Col lg={3} className='pt-5'>

                        <p className='text-white'>
                            <b>Support Forum</b>
                        </p>

                        <p>    Write your email into below field and join our quick support fo </p>

                    </Col>


                </Container>

            </Container>

            <Container fluid className='footer-bottom '>

                <Container className='d-flex flex-column flex-sm-row justify-content-between '>

                    <a href="#">Copyright © 2019 Learned</a>
                    <a href="#">Site Map </a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Website Use Policy</a>
                    <a href="#">Cookie Policy</a>



                </Container>
            </Container>

        </>
    )
}

export default Footer