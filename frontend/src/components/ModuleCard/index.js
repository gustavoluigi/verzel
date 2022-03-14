import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function ModuleCard({ item, func }) {
  return (
    <Link to="/modulos" onClick={() => func(item.id)}>
      <Container>
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4417 16.417L20.8827 7.66834C21.0965 7.32464 21.0099 6.86028 20.6892 6.63115C20.5746 6.54925 20.4399 6.50554 20.3022 6.50554H16.0241V0.997922C16.0241 0.584856 15.7117 0.25 15.3263 0.25C15.093 0.25 14.8752 0.374979 14.7458 0.58305L9.30476 9.33167C9.09101 9.67536 9.17765 10.1397 9.49827 10.3688C9.61289 10.4508 9.74756 10.4945 9.88531 10.4945H14.1634V16.0021C14.1634 16.4151 14.4758 16.75 14.8612 16.75C15.0945 16.75 15.3123 16.625 15.4417 16.417Z"
            fill="#ABC616"
          />
          <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.44282 0.9375H8.36113C9.17603 0.9375 9.83663 1.62956 9.83663 2.48326C9.83663 3.33695 9.17603 4.02901 8.36113 4.02901H3.44282C2.62793 4.02901 1.96733 3.33695 1.96733 2.48326C1.96733 1.62956 2.62793 0.9375 3.44282 0.9375ZM3.44282 13.3035H8.36113C9.17603 13.3035 9.83663 13.9956 9.83663 14.8493C9.83663 15.703 9.17603 16.3951 8.36113 16.3951H3.44282C2.62793 16.3951 1.96733 15.703 1.96733 14.8493C1.96733 13.9956 2.62793 13.3035 3.44282 13.3035ZM1.47549 7.12052H5.41015C6.22504 7.12052 6.88564 7.81258 6.88564 8.66628C6.88564 9.51998 6.22504 10.212 5.41015 10.212H1.47549C0.660601 10.212 0 9.51998 0 8.66628C0 7.81258 0.660601 7.12052 1.47549 7.12052Z"
            fill="#ABC616"
          />
        </svg>

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
