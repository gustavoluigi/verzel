import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: ${({ direction }) => direction};
`;
