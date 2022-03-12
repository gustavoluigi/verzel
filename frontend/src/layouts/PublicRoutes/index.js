import PropTypes from 'prop-types';
import Navbar from '../Navbar';

function PublicRoutes({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PublicRoutes;

PublicRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
