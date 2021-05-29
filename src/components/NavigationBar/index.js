import React from 'react';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import './style.scss';

function NavigationBar() {
  return (
    <Navbar className="bg-white">
      <Container>
        <Navbar.Brand href="#home">
          <span className="motshe-font motshe-reverse text__lg text__main-color">
            M
          </span>
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
