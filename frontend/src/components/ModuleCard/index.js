import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ModuleCardIcon } from '../Svg';
import { Container } from './styles';

function ModuleCard({ item, func }) {
  return (
    <Link to="/modulos" onClick={() => func(item.id)}>
      <Container>
        <ModuleCardIcon />
        <div className="content">
          <h3>{item.name}</h3>
          <p>
            Total de aulas:
            {' '}
            <span>{item.classes.length}</span>
          </p>
        </div>
      </Container>
    </Link>
  );
}

export default ModuleCard;

ModuleCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  func: PropTypes.func,
};

ModuleCard.defaultProps = {
  func: null,
};
