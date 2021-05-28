import './style.scss';
import { Container, Image } from 'react-bootstrap';
import mothshe from './motshe.jpg';

function Landing() {
  return (
    <Container className="landing">
      <Image src={mothshe} fluid />
    </Container>
  );
}

export default Landing;
