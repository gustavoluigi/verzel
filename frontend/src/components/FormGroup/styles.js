import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger};
    font-size: 12px;
    font-weight: 500;
    display: block;
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.label};
  font-weight: 500;

  +input {
    margin-top: 0.5rem;
  }


`;
