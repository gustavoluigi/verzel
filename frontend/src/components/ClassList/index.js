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
        <ClassCard item={item} />
      ))}
    </Container>
  );
}

export default ClassList;

ClassList.propTypes = {
  list: PropTypes.node.isRequired,
};
