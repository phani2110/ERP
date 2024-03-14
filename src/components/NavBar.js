import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../nav.css';

function ColorSchemesExample() {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav className="me-auto">
          <Link to="/" style={linkStyle}><Nav id="one">Dashboard</Nav></Link>
          <Link to="/products" style={linkStyle}><Nav id="two">Product</Nav></Link>
          <Link to="/orders" style={linkStyle}><Nav id="three">Order</Nav></Link>
          <Link to="/orders-calendar" style={linkStyle}><Nav id="four">Calendar</Nav></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

const linkStyle = {
  color: '#fff', // Text color
  textDecoration: 'none' // Remove underline
};

export default ColorSchemesExample;
