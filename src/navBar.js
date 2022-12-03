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
        <header id="navigation">
            <Navbar expand="lg" id="navigation">
                <Container className="wholeNavBar">               
                    <div>
                        <h3 onClick={scroll()}>St Andrew's Church</h3> :
                    </div>
                    <div className="toggleDropdown">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="buttonsSearch  me-auto">
                                    <NavBarButtons  />
                                <NavInput />
                            </Nav>
                        </Navbar.Collapse> 
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar