import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import PageAdminTitle from '../../../../components/PageAdminTitle';
import { ReactComponent as ClassesIcon } from '../../../../assets/images/admin/class-nav.svg';
import CardCreate from '../../../../components/CardCreate';
import Table from '../../../../components/Table';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';

function ListClasses() {
  const [redirect, setRedirect] = useState({ id: 0, state: false });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const tableHead = ['ID', 'Nome da Aula', 'Módulo', 'Data', 'Ações'];
  const tableRows = [
    {
      id: 1, name: 'Aula 1', module: 'Módulo 1', data: '10/03/2022',
    },
    {
      id: 2, name: 'Aula 2', module: 'Módulo 1', data: '10/03/2022',
    },
    {
      id: 3, name: 'Aula 2', module: 'Módulo 1', data: '10/03/2022',
    },
    {
      id: 2, name: 'Aula 2', module: 'Módulo 1', data: '10/03/2022',
    },
  ];

  const redirectToEditPage = redirect.state && (
    <Redirect
      to={`/dashboard/aulas/editar/${redirect.id}`}
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
        <p>Tem certeza que deseja deletar a aula:</p>
        <h1>{ modalContent.name }</h1>
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
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.6" d="M11.6662 25.005H7.66456C3.98113 25.005 0.995117 22.019 0.995117 18.3355V7.66444C0.995117 3.98101 3.98113 0.994995 7.66456 0.994995H18.3357C22.0191 0.994995 25.0051 3.98101 25.0051 7.66444V11.6661" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.66455 7.66438H18.3357" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.66455 18.3355H11.6662" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20.938 26.3388C23.9209 26.3388 26.3389 23.9207 26.3389 20.9379C26.3389 17.9551 23.9209 15.537 20.938 15.537C17.9552 15.537 15.5371 17.9551 15.5371 20.9379C15.5371 23.9207 17.9552 26.3388 20.938 26.3388Z" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.847 20.9378H19.0289" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.938 19.0287V22.8468" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.66455 13H14.334" stroke="#ABC616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export default ListClasses;
