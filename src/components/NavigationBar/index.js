import React from 'react';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import './style.scss';
import motsheLogo from './m.jpg';

function NavigationBar() {
  return (
    <Navbar className="bg-white">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={motsheLogo} className="logo" />
          {/* Motshe! */}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#mamCel">Mam Cel</Nav.Link>
          <Nav.Link href="#mamMotywacje">Mam Motywację</Nav.Link>
          <Nav.Link href="#mentorki">Mentorki</Nav.Link>
        </Nav>
        <Button className="leftAuto button btn-light">Login</Button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
