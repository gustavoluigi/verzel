import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 12px;
  padding: 2rem 3rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: .2s ease-in-out;
  cursor: pointer;


  .box-icon {
    height: 65px;
    width: 65px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s ease-in-out;
    background-color: #F8FAEA;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.label};
    font-weight: 600;
    max-width: 150px;
    text-align: center;
    transition: .2s ease-in-out;
  }

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.primary.main};

    p {
      color: white;
    }
  }
`;
