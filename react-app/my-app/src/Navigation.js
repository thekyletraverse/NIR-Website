import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'
import { Link, Router, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Artists from './Artists'
import Home from './Home'

const Navigation = () => {
  return (


  <Navbar bg="light" variant="light">

    <Navbar.Brand>
      <img src={require('.//Nothing Iconic Reccords.png')} width="135"
        height="135"/>
    </Navbar.Brand>

    <Nav className="nav-link">
    <LinkContainer to="/">
<Nav.Link>Home</Nav.Link>
</LinkContainer>
<LinkContainer to="/artists">
<Nav.Link>Artists</Nav.Link>
</LinkContainer>
<LinkContainer to="/music">
<Nav.Link>Music</Nav.Link>
</LinkContainer>

    </Nav>

  </Navbar>


  );
};

export default Navigation;
