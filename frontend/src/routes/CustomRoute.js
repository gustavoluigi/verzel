/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import useAuth from '../context/hooks/useAuth';

export default function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useAuth();

  if (isPrivate && !authenticated) {
    return <Redirect push to="/login" />;
  }

  return <Route {...rest} />;
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.bool,
};

CustomRoute.defaultProps = {
  isPrivate: false,
};
