/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import ModuleCard from '../ModuleCard';
import { Container } from './styles';

function ModuleList({ direction, list, func }) {
  return (
    <Container direction={direction}>
      {list && list.map((item, key) => (

        <ModuleCard key={key} item={item} func={func} />
      ))}
    </Container>
  );
}

export default ModuleList;

ModuleList.propTypes = {
  direction: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  func: PropTypes.func,
};

ModuleList.defaultProps = {
  func: null,
};
