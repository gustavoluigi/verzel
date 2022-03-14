import PropTypes from 'prop-types';
import ModuleCard from '../ModuleCard';
import { Container } from './styles';

function ModuleList({ direction, list, func }) {
  return (
    <Container direction={direction}>
      {list && list.map((item) => (

        <ModuleCard item={item} func={func} />
      ))}
    </Container>
  );
}

export default ModuleList;

ModuleList.propTypes = {
  direction: PropTypes.string.isRequired,
  list: PropTypes.node.isRequired,
  func: PropTypes.node,
};

ModuleList.defaultProps = {
  func: null,
};
