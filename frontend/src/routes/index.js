/* eslint-disable no-unused-vars */
import useAuth from '../context/hooks/useAuth';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes() {
  const { loading, authenticated } = useAuth();

  // return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
  return <PrivateRoutes />;
}
