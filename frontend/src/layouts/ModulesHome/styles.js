import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
`;

export const Wrapper = styled.div`
  padding: 5rem 1rem;
  ${({ theme }) => theme.layout.container};

  button {
    width: 100%;
    max-width: 432px;
  }
`;

export const Text = styled.div`
  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
