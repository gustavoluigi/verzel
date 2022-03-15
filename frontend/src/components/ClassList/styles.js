import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 767.99px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  >p {
    display: table;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
    padding-top: 2rem;
  }
`;
