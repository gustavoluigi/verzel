import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.layout.container};
  ${({ theme }) => theme.layout.row};
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
`;

export const Text = styled.div`
  > p {
    margin-top: 1rem;
  }

  >form {
    margin-top: 2rem;
  }
`;
