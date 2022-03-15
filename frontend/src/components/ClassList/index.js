import PropTypes from 'prop-types';
import ClassCard from '../ClassCard';
import { Container } from './styles';

function ClassList({ list }) {
  return (
    <Container>
      {!list.length && (
        <p>Nenhuma aula encontrada para este módulo!</p>
      )}
      {list && list.map((item) => (
        <ClassCard key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default ClassList;

ClassList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    id_module: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })).isRequired,
};
