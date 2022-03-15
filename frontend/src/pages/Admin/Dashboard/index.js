import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as DashboardIcon } from '../../../assets/images/admin/dashboard-nav.svg';
import { ReactComponent as ModulesIcon } from '../../../assets/images/admin/modules-nav.svg';
import { ReactComponent as ClassesIcon } from '../../../assets/images/admin/class-nav.svg';
import api from '../../../services/api';

import PageAdminTitle from '../../../components/PageAdminTitle';
import {
  Container, Row, TotalItem, Wrapper,
} from './styles';
import CardCreate from '../../../components/CardCreate';
import { DashboardClassCreateIcon, DashboardModuleCreateIcon } from '../../../components/Svg';

function Dashboard() {
  const [modules, setModules] = useState([]);
  const [classes, setClasses] = useState([]);

  async function getModules() {
    await api.get('/modules').then((res) => {
      setModules(res.data);
    });
  }

  async function getClasses() {
    await api.get('/classes').then((res) => {
      setClasses(res.data);
    });
  }

  useEffect(() => {
    getModules();
    getClasses();
  }, []);

  return (
    <>
      <PageAdminTitle>
        <DashboardIcon />
        Dashboard
      </PageAdminTitle>
      <Container>
        <Wrapper>
          <Row>
            <TotalItem>
              <div className="box-icon">
                <ModulesIcon />
              </div>
              <p>
                Total de módulos:
                <strong>{modules.length}</strong>
              </p>
            </TotalItem>
            <TotalItem>
              <div className="box-icon">
                <ClassesIcon />
              </div>
              <p>
                Total de aulas:
                <strong>{classes.length}</strong>
              </p>
            </TotalItem>
          </Row>
        </Wrapper>
        <Row>
          <Link to="/dashboard/aulas/criar">
            <CardCreate title="Adicionar uma nova aula">
              <DashboardClassCreateIcon />
            </CardCreate>
          </Link>
          <Link to="/dashboard/modulos/criar">
            <CardCreate title="Adicionar um novo modulo">
              <DashboardModuleCreateIcon />
            </CardCreate>
          </Link>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
