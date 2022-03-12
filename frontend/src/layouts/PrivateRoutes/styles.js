import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.gray};
  flex: 0 0 calc(100% - 100px);
  padding: 2rem;
`;
