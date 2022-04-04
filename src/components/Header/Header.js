import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Product Analysis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link as={Link} to='/reviews'>REVIEWS</Nav.Link>
            <Nav.Link as={Link} to='/dashboard'>DASHBOARD</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>BLOGS</Nav.Link>
            <Nav.Link as={Link} to='/about'>ABOUT</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;