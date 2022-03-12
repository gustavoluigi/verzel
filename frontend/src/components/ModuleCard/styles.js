import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  box-shadow: 0px 10px 30px -5px rgba(43, 37, 63, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: baseline;
  border-radius: 12px;
  gap: 0.75rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  .content {
    h3 {
      margin-bottom: 0.5rem;
      transition: all 0.2s ease-in-out;
    }

    p {
      font-size: 13px;
      transition: all 0.2s ease-in-out;
      span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: 700;
        font-size: 18px;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};

    svg {
      * {
        fill: white;
      }
    }
    .content {
      h3,
      p,
      p span {
        color: white;
      }
    }
  }
`;
