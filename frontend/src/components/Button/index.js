import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledButton from './style';

function Button({
  href, className, type, children,
}) {
  return (
    <>
      {type === 'submit' && (
        <StyledButton type={type} className={className}>
          {children}
        </StyledButton>
      )}
      {type !== 'submit' && (
        <Link to={href}>
          <StyledButton type={type} className={className}>
            {children}
          </StyledButton>
        </Link>
      )}
    </>
  );
}

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  href: null,
};
