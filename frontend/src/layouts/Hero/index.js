import { Container, Text } from './styles';

import hero from '../../assets/images/hero.svg';
import Button from '../../components/Button';

function Hero() {
  return (
    <Container>
      <Text>
        <h1>
          Aprenda programação
          <br />
          sem pagar nada
        </h1>
        <p>
          Nossa missão é
          <strong> formar novos desenvolvedores </strong>
          de
          <br />
          sistemas (os famosos DEVs), de uma forma fácil e com
          <br />
          muito profissionalismo.
        </p>
        <Button type="link" href="/cadastro" className="full purple">
          Cadastre-se agora
        </Button>
      </Text>
      <img src={hero} alt="Aprenda programação sem pagar nada | Verzel" />
    </Container>
  );
}

export default Hero;
