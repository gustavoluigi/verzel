import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button';

function Navbar() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Verzel" />
      </Link>
      <div className="buttons">
        <Button href="/cadastro" className="border purple">
          Cadastro
        </Button>
        <Button href="/login" className="full purple">
          Login
        </Button>
      </div>
    </Container>
  );
}

export default Navbar;
