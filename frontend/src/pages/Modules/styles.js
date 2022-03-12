import styled from 'styled-components';
import ModuleList from '../../components/ModuleList';

export const Container = styled.div`
  background: white;
  ${({ theme }) => theme.layout.container};
  padding: 4rem 1rem;

  >p {
    margin-top: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

`;

export const ModuleListStyled = styled(ModuleList)`
  /* flex: 0 0 500px ; */
  margin-right: 2rem !important;
`;
