import './style.scss';
import { Container } from 'react-bootstrap';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';

function Landing() {
  return (
    <Container className="landing">
      <Hero />
      <Features />
      <Pricing />
    </Container>
  );
}

export default Landing;
