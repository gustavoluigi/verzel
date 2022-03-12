import styled from 'styled-components';

export default styled.button`
  height: 48px;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 600;
  min-width: 150px;

  &.full {
    &.purple {
      background-color: ${({ theme }) => theme.colors.secondary.main};
      border-color: ${({ theme }) => theme.colors.secondary.main};
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary.main};
        background-color: transparent;
      }
    }
    &.green {
      background-color: ${({ theme }) => theme.colors.primary.main};
      border-color: ${({ theme }) => theme.colors.primary.main};
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
        background-color: transparent;
      }
    }
  }

  &.border {
    &.purple {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secondary.main};
      border-color: ${({ theme }) => theme.colors.secondary.main};
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary.main};
        color: white;
      }
    }
  }
`;
