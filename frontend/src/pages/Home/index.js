import Footer from '../../layouts/Footer';
import Hero from '../../layouts/Hero';
import ModulesHome from '../../layouts/ModulesHome';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Hero />
      <ModulesHome />
      <Footer />
    </Container>
  );
}

export default Home;
