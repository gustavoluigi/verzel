import { Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ClassesIcon } from '../../../../assets/images/admin/class-nav.svg';
import CardCreate from '../../../../components/CardCreate';
import Table from '../../../../components/Table';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import api from '../../../../services/api';
import { ListClassesIcon } from '../../../../components/Svg';

function ListClasses() {
  const [classes, setClasses] = useState([]);
  const [redirect, setRedirect] = useState({ id: 0, state: false });
  const [modalContent, setModalContent] = useState(false);
  const tableHead = ['ID', 'Nome da Aula', 'Módulo', 'Data', 'Ações'];

  async function getClasses() {
    setClasses([]);
    await api.get('/classes').then((res) => {
      setClasses(() => res.data.map((element) => ({
        id: element.id,
        name: element.name,
        module: element.module.name,
        date: element.date,
      })));
    });
  }

  useEffect(() => {
    getClasses();
  }, []);

  const redirectToEditPage = redirect.state && (
    <Redirect to={`/dashboard/aulas/editar/${redirect.id}`} />
  );

  async function handleDelete() {
    const lesson = await api.get(`classes/${modalContent.id}`);
    await api.delete(`modules/${lesson.data.module.id}/classes/${lesson.data.id}`).then(() => {
      setModalContent(false);
      getClasses();
    });
  }

  function handleClickDelete(data) {
    setModalContent(data);
  }

  function handleClickEdit(id) {
    setRedirect({ id, state: true });
  }
  return (
    <>
      {redirectToEditPage}
      <Modal isOpen={modalContent} onClickClose={() => setModalContent(false)}>
        <p>Tem certeza que deseja deletar a aula:</p>
        <h1>{modalContent?.name}</h1>
        <Button type="button" onClick={handleDelete} className="full danger">
          Deletar
        </Button>
      </Modal>
      <PageAdminTitle>
        <ClassesIcon />
        Aulas
      </PageAdminTitle>
      <Link to="/dashboard/aulas/criar">
        <CardCreate title="Adicionar uma nova aula">
          <ListClassesIcon />
        </CardCreate>
      </Link>
      <Table
        tableHead={tableHead}
        tableRows={classes}
        handleDelete={handleClickDelete}
        handleEdit={handleClickEdit}
      />
    </>
  );
}

export default ListClasses;
