import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ModulesIcon } from '../../../../assets/images/admin/modules-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import api from '../../../../services/api';
import Loader from '../../../../components/Loader';
import ErrorMessage from '../../../../components/ErrorMessage';

function NewModule() {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleNameChange(event) {
    setErrors((prevState) => prevState.filter((error) => error.field !== 'name'));
    setName(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'name'));
    }
  }

  function getErrorMessagebyFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    await api.post('/modules', {
      name,
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        setRedirect(true);
      }, 1000);
    }).catch((err) => {
      setLoading(false);
      setErrorMessage(err.response.data);
    });
  }

  const redirectToListPage = redirect && (
    <Redirect to="/dashboard/modulos" />
  );

  return (
    <>
      {redirectToListPage}
      {loading && <Loader />}
      <PageAdminTitle>
        <ModulesIcon />
        Módulos
      </PageAdminTitle>
      <Container>
        <h1>Cadastro de módulo</h1>
        <p>Preencha os campos abaixo para cadastrar um novo módulo</p>
        <Form onSubmit={handleSubmit}>
          {errorMessage && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
          )}
          <FormGroup
            label="Nome"
            id="name"
            error={getErrorMessagebyFieldName('name')}
          >
            <Input
              value={name}
              type="text"
              id="name"
              onChange={handleNameChange}
              error={getErrorMessagebyFieldName('name')}
            />
          </FormGroup>

          <ButtonContainer>
            <Button className="full green" type="submit">
              Cadastrar
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
}

export default NewModule;
