import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../nav.css';

function ColorSchemesExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={linkStyle}><Nav id="one">Dashboard</Nav></Link>
            <Link to="/products" style={linkStyle}><Nav id="two">Product</Nav></Link>
            <Link to="/orders" style={linkStyle}><Nav id="three">Order</Nav></Link>
            <Link to="/orders-calendar" style={linkStyle}><Nav id="four">Calendar</Nav></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const linkStyle = {
  color: '#fff', // Text color
  textDecoration: 'none' // Remove underline
};

export default ColorSchemesExample;



