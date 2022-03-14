import styled from 'styled-components';

export const Container = styled.div`
  background: white;

  height: 100%;
  min-height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 100%;
    height: auto;
    padding: 1rem;
  }

  .logout {
    border: 0;
    background: transparent;
    margin-top: auto;
    margin-bottom: 2rem;
    filter: grayscale(1);
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 1rem;

  &:before {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary.main};
    position: absolute;
    height: 100%;
    width: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    left: 0;
    top: 0;
    bottom: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ active }) => (active ? '1' : '0')};
  }

  svg {
    transition: 0.2s ease-in-out;
    filter: ${({ active }) => (active ? 'grayscale(0)' : 'grayscale(1)')};
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    svg {
      filter: grayscale(0);
    }
  }
`;
