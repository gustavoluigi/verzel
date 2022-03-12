import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: white;
  border-radius: 12px;
  gap: 2rem;
  font-weight: 600;
  margin-top: 0.5rem;

  > * {
    position: relative;
    &:not(:last-child):not(:first-child) {
      flex: 1;
      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background-color: black;
        position: absolute;
        left: -1rem;
      }
    }

    &:first-child {
      flex: 0 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > *:last-child {
    margin-left: auto;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    &:hover {
      transform: scale(1.2);
    }
  }

  svg {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
