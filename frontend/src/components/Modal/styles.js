import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: ${({ openModal }) => (openModal ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} .7s forwards ease;

`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  text-align: center;
  position: relative;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }


`;

export const CloseModal = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
