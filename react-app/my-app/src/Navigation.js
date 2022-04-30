import React from "react";
import { Button, Navbar, Container, Form, FormControl} from 'react-bootstrap'
import { Link, Router, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';


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
      <LinkContainer to="/events">
        <Nav.Link>Events</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
    <Nav style={{padding:"75px"}}>
    
          </Nav>
    <Nav style={{padding:"75px"}}>
    <a href="https://www.instagram.com/nothingiconicrecords/?utm_source=ig_embed&amp;utm_campaign=loading">
    <i class="button-style2 fa-2x"><FaInstagram/></i>
    </a>
    <a href="https://twitter.com/IconicNothing?s=20&t=QV86wjoDvNA5AsHq9WAatA">
     <i class="button-style2 fa-2x"><FaTwitter/></i>
    </a>
    <a href="https://twitter.com/Jp__Shannon?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
     <i class="button-style2 fa-2x"><FaYoutube/></i>
    </a>
          </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
};

export default Navigation;
