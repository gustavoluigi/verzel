import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Item, List } from './styles';
import logo from '../../assets/images/admin/logo-nav.svg';
import { ReactComponent as DashboardIcon } from '../../assets/images/admin/dashboard-nav.svg';
import { ReactComponent as ModulesIcon } from '../../assets/images/admin/modules-nav.svg';
import { ReactComponent as ClassIcon } from '../../assets/images/admin/class-nav.svg';
// import Button from '../../components/Button';

function Sidebar() {
  const [page, setPage] = useState('/dashboard');

  return (
    <Container>
      <img src={logo} alt="Verzel" />
      <List>
        <Link onClick={() => setPage('/dashboard')} to="/dashboard">
          <Item active={page === '/dashboard'}>
            <DashboardIcon />
          </Item>
        </Link>
        <Link
          onClick={() => setPage('/dashboard/modulos')}
          to="/dashboard/modulos"
        >
          <Item
            active={
              page.includes('/dashboard/modulos')
              || window.location.pathname.includes('/dashboard/modulos')
            }
          >
            <ModulesIcon />
          </Item>
        </Link>
        <Link onClick={() => setPage('/dashboard/aulas')} to="/dashboard/aulas">
          <Item
            active={
              page.includes('/dashboard/aulas')
              || window.location.pathname.includes('/dashboard/aulas')
            }
          >
            <ClassIcon />
          </Item>
        </Link>
      </List>
    </Container>
  );
}

export default Sidebar;
