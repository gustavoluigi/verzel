import ClassList from '../../components/ClassList';
import { Container, ModuleListStyled, Wrapper } from './styles';

function Modules() {
  return (
    <Container>
      <h1>Veja os módulos disponíveis.</h1>
      <p>Navegue entre os módulos disponíveis e visualize as suas aulas!</p>
      <Wrapper>
        <ModuleListStyled direction="column" />
        <ClassList />
      </Wrapper>
    </Container>
  );
}

export default Modules;
