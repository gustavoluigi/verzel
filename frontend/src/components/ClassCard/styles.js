import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  box-shadow: 0px 10px 30px -5px rgba(43, 37, 63, 0.1);
  padding: 1.5rem .5rem .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 250px;
  svg {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .date {
    margin-bottom: 1rem;
  }

  a {
    width: 100%;
    button {
      width: 100%;
    }
  }

`;
