import Button from '../../components/Button';
import ModuleList from '../../components/ModuleList';
import { Container, Text, Wrapper } from './styles';

function ModulesHome() {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>De uma espiada em nosso conteúdo.</h1>
          <p>
            Nós temos a missão de transformá-lo em um programador de verdade,
            preparando-o
            <br />
            para o mercado de trabalho.
            <strong> O que está esperando?</strong>
          </p>
        </Text>
        <ModuleList direction="row" />
        <Button type="link" href="/modulos" className="full purple">
          Veja todos os módulos
        </Button>
      </Wrapper>
    </Container>
  );
}

export default ModulesHome;
