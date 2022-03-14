import { useEffect, useState } from 'react';
import ClassList from '../../components/ClassList';
import { Container, ModuleListStyled, Wrapper } from './styles';
import api from '../../services/api';

function Modules() {
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  async function getModules() {
    setModules([]);
    await api.get('/modules').then((res) => {
      setModules(res.data);
      setLessons(res.data[0].classes);
    });
  }

  async function handleModuleClick(e) {
    await api.get(`/modules/${e}/classes`).then((res) => {
      setLessons(res.data.classes);
    }, (err) => {
      setLessons([]);
    });
  }

  useEffect(() => {
    getModules();
  }, []);
  return (
    <Container>
      <h1>Veja os módulos disponíveis.</h1>
      <p>Navegue entre os módulos disponíveis e visualize as suas aulas!</p>
      <Wrapper>
        <ModuleListStyled direction="column" list={modules} func={handleModuleClick} />
        <ClassList list={lessons} />
      </Wrapper>
    </Container>
  );
}

export default Modules;
