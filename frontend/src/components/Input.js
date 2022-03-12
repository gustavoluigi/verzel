import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 2px solid #ECECFF;
  outline: none;
  box-shadow: none;
  padding: 0.5rem;
  font-size: 16px;
  transition: .2s ease-in-out ;

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger};
    border-color: ${theme.colors.danger} !important;
  `}
`;
