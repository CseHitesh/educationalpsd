import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../resources/Background.png';


const MainSection = () => {
    return (
        <>
            <Container fluid className='main-section '>

                <Container>

                    <Row className="All-main-content" >


                        <Col xs lg="6" className=' main-writing d-flex flex-column'>
                            <h1 className='m-heading-text'>Innovation for education  and society</h1>
                            <p>Our interdisciplinary majors and minors mean you can
                                chart your own course for academic success.</p>

                            <button className='my-btn1'>Visit our Campus </button>
                        </Col>
                    </Row>


                </Container>
            </Container>

        </>
    )
}

export default MainSection