import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import isEmailValid from '../../utils/isEmailValid';
import { ButtonContainer, Form } from './styles';
import api from '../../services/api';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { name: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => !error.name,
      ));
    }
  }

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
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => !error.email,
      ));
    }
  }

  function getErrorMessagebyFieldName(fieldName) {
    const result = errors.find((error) => error[fieldName]);
    return result ? result[fieldName] : '';
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    await api.post('/users', {
      name,
      email,
      password,
    }).then(() => {
      setLoading(false);
      setRedirect(true);
    }).catch((err) => {
      setErrorMessage(err.response.data);
    });
  }

  const redirectToLoginPage = redirect && (
    <Redirect to="/login" />
  );

  return (
    <>
      {redirectToLoginPage}

      {errorMessage && (
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
      )}
      <Form onSubmit={handleSubmit}>
        <FormGroup label="Nome" id="name" error={getErrorMessagebyFieldName('name')}>
          <Input
            value={name}
            type="text"
            id="name"
            onChange={handleNameChange}
            error={getErrorMessagebyFieldName('name')}
          />
        </FormGroup>
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
            Cadastrar
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

export default RegisterForm;
