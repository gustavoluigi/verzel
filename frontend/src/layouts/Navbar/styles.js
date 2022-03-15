import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.layout.container};
  ${({ theme }) => theme.layout.row};
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .buttons {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 767.99px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;
