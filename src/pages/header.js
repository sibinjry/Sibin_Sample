import React from "react";
import '../assets/css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <Navbar expand="md" bg="light" variant="light" style={{ backgroundColor: 'rgba(52,52,52,0.5)' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="real">Real Estate Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
            <Nav.Link as={Link} to="/addpackages">Add Packages</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;