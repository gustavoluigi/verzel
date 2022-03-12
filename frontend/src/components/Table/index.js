/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { TableStyled } from './styles';

function Table({
  tableHead, tableRows, handleEdit, handleDelete,
}) {
  return (
    <TableStyled>
      <TableHead items={tableHead} />
      {tableRows.map((row) => (
        <TableRow
          key={row.id}
          item={row}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </TableStyled>
  );
}

export default Table;

Table.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
