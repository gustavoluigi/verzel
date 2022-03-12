import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ModulesIcon } from '../../../../assets/images/admin/modules-nav.svg';
import CardCreate from '../../../../components/CardCreate';
import Table from '../../../../components/Table';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';

function ListModules() {
  const [redirect, setRedirect] = useState({ id: 0, state: false });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const tableHead = ['ID', 'Nome do Módulo', 'Ações'];
  const tableRows = [
    { id: 1, name: 'Módulo 1' },
    { id: 2, name: 'Módulo 2' },
  ];

  const redirectToEditPage = redirect.state && (
    <Redirect
      to={`/dashboard/modulos/editar/${redirect.id}`}
    />
  );

  function handleDelete() {
    setShowModal(false);
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
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.2722 25H3.72819C2.25486 25 1.06152 23.8067 1.06152 22.3333V11.6667C1.06152 10.1933 2.25486 9 3.72819 9H22.2722C23.7455 9 24.9389 10.1933 24.9389 11.6667V22.3333C24.9389 23.8067 23.7442 25 22.2722 25Z" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.6" d="M3.37598 9V7.66667C3.37598 6.19333 4.56931 5 6.04264 5H19.956C21.4293 5 22.6226 6.19333 22.6226 7.66667V9M5.68798 5V3.66667C5.68798 2.19333 6.88131 1 8.35464 1H17.6466C19.12 1 20.3133 2.19333 20.3133 3.66667V5" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0002 13V21" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.8666 16.8667H9.1333" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </CardCreate>
      </Link>
      <Table
        tableHead={tableHead}
        tableRows={tableRows}
        handleDelete={handleClickDelete}
        handleEdit={handleClickEdit}
      />
    </>
  );
}

export default ListModules;
