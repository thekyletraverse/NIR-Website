import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'
import { Link, Router, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


const Navigation = () => {
  return (

  <Navbar bg="light" variant="light">
    <LinkContainer to="/">
      <Navbar.Brand><img src={require('.//Nothing Iconic Reccords.png')} width="135" height="135"/>
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-link">
      <LinkContainer to="/artist">
        <Nav.Link>Artist</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/music">
        <Nav.Link>Music</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/videos">
        <Nav.Link>Videos</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/shop">
        <Nav.Link>Shop</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
};

export default Navigation;
