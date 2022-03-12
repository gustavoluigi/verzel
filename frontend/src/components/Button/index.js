import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledButton from './style';

function Button({
  href, className, type, children, onClick,
}) {
  return (
    <>
      {(type === 'submit' || type === 'button') && (
        <StyledButton type={type} onClick={onClick} className={className}>
          {children}
        </StyledButton>
      )}
      {type === 'link' && (
        <Link to={href}>
          <StyledButton className={className}>
            {children}
          </StyledButton>
        </Link>
      )}
    </>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  href: null,
  onClick: null,
};
