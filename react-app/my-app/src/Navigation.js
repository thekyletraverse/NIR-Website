import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>

  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#home">
      <img src={require('.//Nothing Iconic Reccords.png')} width="150"
        height="150"/>
    </Navbar.Brand>
  </Container>
  </Navbar>
  <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>

</>
  );
};

export default Navigation;
