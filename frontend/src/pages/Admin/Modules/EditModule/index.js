import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ModulesIcon } from '../../../../assets/images/admin/modules-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import api from '../../../../services/api';
import ErrorMessage from '../../../../components/ErrorMessage';

function EditModule() {
  const { id } = useParams();
  const [module, setModule] = useState();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function getModule() {
    await api.get(`/modules/${id}`).then((res) => {
      setModule(res.data);
      setName(res.data.name);
    });
  }

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
    e.preventDefault();
    // console.log('*** FormData ***', e.target.value);
    await api.patch(`/modules/${id}`, {
      name,
    }).then((res) => {
      setModule(res.data);
      setName(res.data.name);
      // getModule();
      setRedirect(true);
    }).catch((err) => {
      setErrorMessage(err.response.data);
    });
  }

  useEffect(() => {
    getModule();
  }, []);

  const redirectToListPage = redirect && (
    <Redirect to="/dashboard/modulos" />
  );

  return (
    <>
      {redirectToListPage}
      <PageAdminTitle>
        <ModulesIcon />
        Módulos
      </PageAdminTitle>
      <Container>
        <h1>Edição de módulo</h1>
        <p>Edite o campo abaixo</p>
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
              Salvar alterações
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
}

export default EditModule;
