import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <>

  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#home">
      <img src={require('.//Nothing Iconic Reccords.png')} width="150"
        height="150"/>
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
  </Navbar>

</>
  );
};

export default Navigation;
