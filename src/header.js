import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
    return(
        <>
        <div className="main-div" style={{ backgroundColor:{backgroundColor:'rgba(52,52,52,alpha)'}}}>
       <Navbar>
      <Container>
        <Navbar.Brand href="#home" className="real">Real Estate Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navitem">
            <Nav.Link href="http://localhost:3000/Home.js">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/about.js">About</Nav.Link>
            <Nav.Link href="http://localhost:3000/packages.js">packages</Nav.Link>
            <Nav.Link href="http://localhost:3000/addpackages.js">Addpackages</Nav.Link>

            <Nav.Link href="http://localhost:3000/contact.js">Contact</Nav.Link>
            <Nav.Link href="http://localhost:3000/login.js">Login</Nav.Link>
            {/* <Nav.Link href="http://localhost:3000/table.js">Table</Nav.Link> */}
            </Nav>
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
         </>
    );
}
export default Header;