import { useState } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import isEmailValid from '../../utils/isEmailValid';
import { ButtonContainer, Form } from './styles';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

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

  // console.log(errors);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
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
  );
}

export default RegisterForm;
