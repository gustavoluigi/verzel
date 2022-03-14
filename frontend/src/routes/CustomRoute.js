/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import {
  // Redirect,
  Route,
} from 'react-router-dom';
import Loader from '../components/Loader';
import { AuthContext } from '../context/authContext';

export default function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  if (isPrivate && !authenticated) {
    // return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.bool,
};

CustomRoute.defaultProps = {
  isPrivate: false,
};
