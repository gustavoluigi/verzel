import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import { Container, Wrapper } from './styles';

function PrivateRoutes({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
