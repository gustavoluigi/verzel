import PropTypes from 'prop-types';
import { Container } from './styles';

function TableHead({ items }) {
  return (
    <Container>
      {items.map((item) => (
        <div key={item} className="table-head-item">
          {item}
        </div>
      ))}
    </Container>
  );
}

export default TableHead;

TableHead.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
