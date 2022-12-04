import React from "react";
import NavBar from "./navBar"
import MainFooter from "./mainPageFooter"
import Carousel from "./mainPageCarousel"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainText from './mainPageText';
import MainSide from './mainPageSide'


function MainPage (){
    return(
        <div className="mainPageBody">
            <NavBar />
            <Container fluid className="mainBody">
                <Row>
                    <Col md={8} xs={12}>
                        <MainText />
                    </Col>
                    <Col className="sideCol" md={4} xs={12}>
                        <MainSide />
                    </Col>
                </Row>
            </Container>
            <Carousel />
            <MainFooter />
        </div>
    )
}

export default MainPage