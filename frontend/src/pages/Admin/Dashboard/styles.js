import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;
export const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767.99px) {
    flex-direction: column;
  }
`;
export const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const TotalItem = styled.div`
border-radius: 8px;
  display: flex;
  padding: 2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.gray};

  .box-icon {
    background-color: ${({ theme }) => theme.colors.tertiary.main};
    padding: 0.5rem;
    border-radius: 8px;
    margin-right: 1rem;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      max-width: 100%;
      height: auto;
      path,
      rect {
        fill: white;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text.body};
    font-weight: 500;
    strong {
      display: block;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.text.label};
    }
  }
`;
