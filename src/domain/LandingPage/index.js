import './style.scss';
import { Container, Image } from 'react-bootstrap';
import Hero from './Hero';
import Features from './Features';

function Landing() {
  return (
    <Container className="landing">
      <Hero />
      <Features />
    </Container>
  );
}

export default Landing;
