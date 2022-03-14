import PropTypes from 'prop-types';
import ModuleCard from '../ModuleCard';
import { Container } from './styles';

function ModuleList({ direction }) {
  return (
    <Container direction={direction}>
      <ModuleCard />
      <ModuleCard />
      <ModuleCard />
    </Container>
  );
}

export default ModuleList;

ModuleList.propTypes = {
  direction: PropTypes.string.isRequired,
  // className: PropTypes.string.isRequired,
};
