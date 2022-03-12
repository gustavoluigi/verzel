/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ClassesIcon } from '../../../../assets/images/admin/class-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

function NewClass() {
  const [name, setName] = useState('');
  const [module, setModule] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState([]);

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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
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
              value={name}
              id="module"
              // onChange={handleNameChange}
              error={getErrorMessagebyFieldName('module')}
            >
              <option value="modulo1">Módulo 1</option>
            </Select>
          </FormGroup>
          <FormGroup
            label="Data"
            id="date"
            error={getErrorMessagebyFieldName('date')}
          >
            <Input
              value={name}
              type="date"
              id="date"
              onChange={handleNameChange}
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
