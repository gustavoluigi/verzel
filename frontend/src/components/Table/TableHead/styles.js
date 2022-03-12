import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 12px;
  gap: 2rem;
  color: white;
  font-weight: 600;

  > * {
    position: relative;
    &:not(:last-child):not(:first-child) {
      flex: 1;
      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background-color: white;
        position: absolute;
        left: -1rem;
      }
    }

    &:first-child {
      flex: 0 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > *:last-child {
    margin-left: auto;
  }
`;
