import { useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ModulesIcon } from '../../../../assets/images/admin/modules-nav.svg';
import { ButtonContainer, Container, Form } from './styles';
import Button from '../../../../components/Button';
import FormGroup from '../../../../components/FormGroup';
import Input from '../../../../components/Input';

function EditModule() {
  const [name, setName] = useState('');
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
        <ModulesIcon />
        Módulos
      </PageAdminTitle>
      <Container>
        <h1>Edição de módulo</h1>
        <p>Edite o campo abaixo</p>
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

export default EditModule;
