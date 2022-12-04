import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavBarButtons from './mainNavButtons';
import NavInput from './navSearch.js';


function NavBar(){

    function scroll(){
        window.scrollTo(0,0)
    }

    return(
        <div id="navigation">
            <Navbar expand="lg" id="navigation">
                <Container className="wholeNavBar">
                    <Navbar.Text>
                        <h3 onClick={scroll}>St Andrew's Church</h3>
                    </Navbar.Text>               
                    <div className="toggleDropdown">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse bg="light" id="responsive-navbar-nav" >
                            <Nav className="buttonsSearch  me-auto">
                                <NavBarButtons  />
                                <NavInput />
                            </Nav>
                        </Navbar.Collapse> 
                    </div>
                </Container>
            </Navbar>
        </div> 
    )
}

export default NavBar