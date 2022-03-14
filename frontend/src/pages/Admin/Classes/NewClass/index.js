/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ClassesIcon } from '../../../../assets/images/admin/class-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import api from '../../../../services/api';
import Loader from '../../../../components/Loader';

function NewClass() {
  const [name, setName] = useState('');
  const [module, setModule] = useState('');
  const [moduleList, setModuleList] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'email'));
    }
  }

  function getErrorMessagebyFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    await api.post(`/modules/${module}/classes`, {
      name,
      date,
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        setRedirect(true);
      }, 1000);
    });
  }

  async function getModules() {
    setModuleList([]);
    await api.get('/modules').then((res) => {
      res.data.forEach((element) => {
        setModuleList((prevState) => [
          ...prevState,
          { id: element.id, name: element.name },
        ]);
      });
    });
  }

  useEffect(() => {
    getModules();
  }, []);

  const redirectToListPage = redirect && (
    <Redirect to="/dashboard/aulas" />
  );

  return (
    <>
      {redirectToListPage}
      {loading && <Loader />}
      <PageAdminTitle>
        <ClassesIcon />
        Aulas
      </PageAdminTitle>
      <Container>
        <h1>Cadastro de aulas</h1>
        <p>Preencha os campos abaixo para cadastrar uma nova aula</p>
        <Form onSubmit={handleSubmit}>
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
          <FormGroup
            label="Módulo"
            id="name"
            error={getErrorMessagebyFieldName('module')}
          >
            <Select
              value=""
              id="module"
              onChange={(event) => setModule(event.target.value)}
              error={getErrorMessagebyFieldName('module')}
            >
              {moduleList && moduleList.map((el) => (
                <option key={el.id} value={el.id}>{el.name}</option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup
            label="Data"
            id="date"
            error={getErrorMessagebyFieldName('date')}
          >
            <Input
              value={date}
              type="date"
              id="date"
              onChange={(event) => setDate(event.target.value)}
              error={getErrorMessagebyFieldName('date')}
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

export default NewClass;
