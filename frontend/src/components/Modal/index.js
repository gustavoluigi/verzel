import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { CloseModal, Container, Overlay } from './styles';
import { ReactComponent as DeleteIcon } from '../../assets/images/utils/delete.svg';

function Modal({ children, isOpen, onClickClose }) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CloseModal>
          <DeleteIcon onClick={onClickClose} />
        </CloseModal>
        {children}
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
