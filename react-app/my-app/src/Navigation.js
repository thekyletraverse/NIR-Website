import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


const Navigation = () => {
  return (
    <>

  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#home">
      <img src={require('.//Nothing Iconic Reccords.png')} width="135"
        height="135"/>
    </Navbar.Brand>
    <Nav className="nav-link">
      <Nav.Link href="#artits">Artists</Nav.Link>
      <Nav.Link href="#music">Music</Nav.Link>
      <Nav.Link href="#videos">Videos</Nav.Link>
      <Nav.Link href="#shop">Shop</Nav.Link>
      <Nav.Link href="#subscribe">Subscribe</Nav.Link>
    </Nav>
  </Container>
  </Navbar>

</>
  );
};

export default Navigation;
