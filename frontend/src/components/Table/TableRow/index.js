import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from '../../../assets/images/utils/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/images/utils/delete.svg';
import { Actions, Container } from './styles';

function TableRow({ item, handleEdit, handleDelete }) {
  // const result = Object.keys(item).map((key) => [String(key), item[key]]);
  // console.log();
  // Object.entries(item).map((i) => console.log(i.id));
  return (
    <Container>
      {Object.entries(item).map(([, value]) => (
        <p>{value}</p>
      ))}

      {/* <p>{item.id}</p>
      <p>{item.name}</p> */}
      <Actions>
        <EditIcon onClick={() => handleEdit(item.id)} />
        <DeleteIcon
          onClick={() => handleDelete({ id: item.id, name: item.name })}
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
