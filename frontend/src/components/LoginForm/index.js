/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import isEmailValid from '../../utils/isEmailValid';
import { ButtonContainer, Form } from './styles';
import useAuth from '../../context/hooks/useAuth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const { handleLogin } = useAuth();

  function handleEmailChange(event) {
    setEmail(event.target.value);

    setErrors((prevState) => prevState.filter(
      (error) => error.field !== 'email',
    ));

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail é obrigatório' },
      ]);
    } else if (event.target.value && !isEmailValid(event.target.value)) {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'Digite um e-mail válido' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

  function getErrorMessagebyFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="E-mail" id="email" error={getErrorMessagebyFieldName('email')}>
        <Input
          value={email}
          type="email"
          id="email"
          onChange={handleEmailChange}
          error={getErrorMessagebyFieldName('email')}
        />
      </FormGroup>
      <FormGroup label="Senha" id="password">
        <Input
          value={password}
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <ButtonContainer>
        <Button className="full green" type="submit">
          Acessar
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default LoginForm;

// LoginForm.propTypes = {
//   handleLogin: PropTypes.func,
// };

// LoginForm.defaultProps = {
//   handleLogin: null,
// };
