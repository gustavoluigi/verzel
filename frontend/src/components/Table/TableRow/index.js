import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from '../../../assets/images/utils/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/images/utils/delete.svg';
import { Actions, Container } from './styles';

function TableRow({ item, handleEdit, handleDelete }) {
  return (
    <Container>
      {Object.entries(item).map(([key, value]) => (
        <p key={key}>{value}</p>
      ))}
      <Actions>
        <EditIcon onClick={() => handleEdit(item.id)} />
        <DeleteIcon
          // onClick={() => handleDelete({ id: item.id, name: item.name })}
          // onClick={() => handleDelete(Object.entries(item).map(([name, valor]) => (
          //   { key: name, value: valor }
          // )))}
          onClick={() => handleDelete(item)}
        />
      </Actions>
    </Container>
  );
}

export default TableRow;

TableRow.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
