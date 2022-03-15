import { Container, Text } from './styles';
import login from '../../assets/images/login.svg';
import LoginForm from '../../components/LoginForm';

function Login() {
  return (
    <Container>
      <Text>
        <h1>Login</h1>
        <p>Preencha os campos abaixo e acesse sua conta</p>
        <LoginForm />
      </Text>
      <img src={login} alt="Acesse nossos cursos | Verzel" />
    </Container>
  );
}

export default Login;
