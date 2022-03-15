import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ClassCardIcon } from '../Svg';
import { Container } from './styles';

function ClassCard({ item }) {
  return (
    <Container>
      <h3>{item.name}</h3>
      <ClassCardIcon />
      <p className="date">
        {format(parseISO(item.date), 'dd/MM/yyyy')}
      </p>
      <Button to="/" className="full purple">
        Assitir a aula
      </Button>
    </Container>
  );
}

export default ClassCard;

ClassCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    id_module: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};
