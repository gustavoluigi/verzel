import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ClassesIcon } from '../../../../assets/images/admin/class-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import api from '../../../../services/api';

function EditClass() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [modules, setModules] = useState('');
  const [module, setModule] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function getModules() {
    await api.get('/modules').then((res) => {
      setModules(res.data);
    });
  }

  async function getClass() {
    await api.get(`/classes/${id}`).then((res) => {
      setModule(res.data.module.id);
      setName(res.data.name);
      setDate(res.data.date);
    });
  }

  useEffect(() => {
    getClass();
    getModules();
  }, []);

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

  function getErrorMessagebyFieldName(fieldName) {
    const result = errors.find((error) => error[fieldName]);
    return result ? result[fieldName] : '';
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.patch(`/modules/${module}/classes/${id}`, {
      name,
      id_module: module,
      date,
    }).then((res) => {
      setModule(res.data);
      setName(res.data.name);
      setRedirect(true);
    });
  }

  const redirectToListPage = redirect && (
    <Redirect to="/dashboard/aulas" />
  );

  return (
    <>
      {redirectToListPage}
      <PageAdminTitle>
        <ClassesIcon />
        Aulas
      </PageAdminTitle>
      <Container>
        <h1>Edição de aula</h1>
        <p>Edite os campos abaixo</p>
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
              value={module}
              id="module"
              onChange={(event) => setModule(event.target.value)}
              error={getErrorMessagebyFieldName('module')}
            >
              {modules
                && modules.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
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

export default EditClass;
