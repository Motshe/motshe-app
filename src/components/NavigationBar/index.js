import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './style.scss';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Motshe!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#community">Społeczność</Nav.Link>
          <Nav.Link href="#goalSearch">Wyszukiwarka</Nav.Link>
          <Nav.Link href="#mentors">Mentorki</Nav.Link>
        </Nav>
        <Button className="leftAuto" inline type="submit">
          Login
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
