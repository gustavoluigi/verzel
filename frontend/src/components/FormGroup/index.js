import PropTypes from 'prop-types';
import { Container, Label } from './styles';

function FormGroup({
  label, id, error, children,
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

export default FormGroup;

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
