import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import mothshe from './motshe.jpg';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Motshe logo"
            src={mothshe}
            width="auto"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#community">Społeczność</Nav.Link>
          <Nav.Link href="#goalSearch">Wyszukiwarka</Nav.Link>
          <Nav.Link href="#mentors">Mentorki</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
