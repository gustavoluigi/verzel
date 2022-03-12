import PropTypes from 'prop-types';
import { Container } from './styles';

function CardCreate({ title, children }) {
  return (
    <Container>
      <div className="box-icon">
        {children}
      </div>
      <p>
        {title}
      </p>
    </Container>
  );
}

export default CardCreate;

CardCreate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
