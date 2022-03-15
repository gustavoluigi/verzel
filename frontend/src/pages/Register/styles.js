import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.layout.container};
  ${({ theme }) => theme.layout.row};
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;

  @media (max-width: 767.99px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  > p {
    margin-top: 1rem;
  }

  >form {
    margin-top: 2rem;
  }
`;
