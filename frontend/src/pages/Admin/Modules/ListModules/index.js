import { Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ModulesIcon } from '../../../../assets/images/admin/modules-nav.svg';
import CardCreate from '../../../../components/CardCreate';
import Table from '../../../../components/Table';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import api from '../../../../services/api';
import { ListModuleIcon } from '../../../../components/Svg';

function ListModules() {
  const [modules, setModules] = useState([]);
  const [redirect, setRedirect] = useState({ id: 0, state: false });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const tableHead = ['ID', 'Nome do Módulo', 'Ações'];

  async function getModules() {
    setModules([]);
    await api.get('/modules').then((res) => {
      res.data.forEach((element) => {
        setModules((prevState) => [
          ...prevState,
          { id: element.id, name: element.name },
        ]);
      });
    });
  }

  useEffect(() => {
    getModules();
  }, []);

  const redirectToEditPage = redirect.state && (
    <Redirect
      to={`/dashboard/modulos/editar/${redirect.id}`}
    />
  );

  async function handleDelete() {
    await api.delete(`modules/${modalContent.id}`).then(() => {
      setShowModal(false);
      getModules();
    });
  }

  function handleClickDelete(data) {
    setModalContent(data);
    setShowModal(true);
  }

  function handleClickEdit(id) {
    setRedirect({ id, state: true });
  }
  return (
    <>
      {redirectToEditPage}
      <Modal isOpen={showModal} onClickClose={() => setShowModal(false)}>
        <p>Tem certeza que deseja deletar o módulo:</p>
        <h1>{ modalContent.name }</h1>
        <Button type="button" onClick={handleDelete} className="full danger">
          Deletar
        </Button>

      </Modal>
      <PageAdminTitle>
        <ModulesIcon />
        Módulos
      </PageAdminTitle>
      <Link to="/dashboard/modulos/criar">
        <CardCreate title="Adicionar um novo modulo">
          <ListModuleIcon />
        </CardCreate>
      </Link>
      <Table
        tableHead={tableHead}
        tableRows={modules}
        handleDelete={handleClickDelete}
        handleEdit={handleClickEdit}
      />
    </>
  );
}

export default ListModules;
