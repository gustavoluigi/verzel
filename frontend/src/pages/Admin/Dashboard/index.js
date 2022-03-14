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
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2719 25.3313H3.72795C2.25461 25.3313 1.06128 24.138 1.06128 22.6647V11.998C1.06128 10.5247 2.25461 9.33133 3.72795 9.33133H22.2719C23.7453 9.33133 24.9386 10.5247 24.9386 11.998V22.6647C24.9386 24.138 23.7439 25.3313 22.2719 25.3313Z"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.6"
                  d="M3.37598 9.33133V7.998C3.37598 6.52466 4.56931 5.33133 6.04264 5.33133H19.956C21.4293 5.33133 22.6226 6.52466 22.6226 7.998V9.33133M5.68798 5.33133V3.998C5.68798 2.52466 6.88131 1.33133 8.35464 1.33133H17.6466C19.12 1.33133 20.3133 2.52466 20.3133 3.998V5.33133"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9999 13.3313V21.3313"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8666 17.198H9.1333"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CardCreate>
          </Link>
          <Link to="/dashboard/modulos/criar">
            <CardCreate title="Adicionar um novo modulo">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  d="M11.6662 25.005H7.66456C3.98113 25.005 0.995117 22.019 0.995117 18.3355V7.66444C0.995117 3.98101 3.98113 0.994995 7.66456 0.994995H18.3357C22.0191 0.994995 25.0051 3.98101 25.0051 7.66444V11.6661"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.66455 7.66438H18.3357"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.66455 18.3355H11.6662"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.938 26.3388C23.9209 26.3388 26.3389 23.9207 26.3389 20.9379C26.3389 17.9551 23.9209 15.537 20.938 15.537C17.9552 15.537 15.5371 17.9551 15.5371 20.9379C15.5371 23.9207 17.9552 26.3388 20.938 26.3388Z"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.847 20.9378H19.0289"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.938 19.0287V22.8468"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.66455 13H14.334"
                  stroke="#ABC616"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CardCreate>
          </Link>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
