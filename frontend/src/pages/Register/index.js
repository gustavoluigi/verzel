import { Container, Text } from './styles';

import register from '../../assets/images/register.svg';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <Container>
      <Text>
        <h1>Cadastro</h1>
        <p>Preencha os campos abaixo e crie sua conta</p>
        <RegisterForm />
      </Text>
      <img src={register} alt="Acesse nossos cursos | Verzel" />
    </Container>
  );
}

export default Register;
