import React from "react";
import { Button, Navbar, Container} from 'react-bootstrap'

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

</>
  );
};

export default Navigation;
