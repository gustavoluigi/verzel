import { useContext, useState } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import isEmailValid from '../../utils/isEmailValid';
import { ButtonContainer, Form } from './styles';
import useAuth from '../../context/hooks/useAuth';
import ErrorMessage from '../ErrorMessage';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const { handleLogin } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setErrors((prevState) => prevState.filter(
      (error) => !error.email,
    ));
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { email: 'E-mail é obrigatório' },
      ]);
    } else if (!isEmailValid(event.target.value)) {
      setErrors((prevState) => [
        ...prevState,
        { email: 'Digite um e-mail válido' },
      ]);
    }
  }

  function getErrorMessagebyFieldName(fieldName) {
    const result = errors.find((error) => error[fieldName]);
    return result ? result[fieldName] : '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password }).catch((err) => {
      setErrorMessage(err.response.data);
    });
  }
  return (
    <>
      {errorMessage && (
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
      )}
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
    </>
  );
}

export default LoginForm;
