import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.layout.container};
  ${({ theme }) => theme.layout.row};
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
`;

export const Text = styled.div`
  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  button {
    width: 100%;
  }
`;
