import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import PublicRoutes from '../layouts/PublicRoutes';

import Home from '../pages/Home';
import Modules from '../pages/Modules';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routes() {
  return (
    <PublicRoutes>
      <Switch>
        <CustomRoute path="/" exact component={Home} />
        <CustomRoute path="/modulos" exact component={Modules} />
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute path="/cadastro" exact component={Register} />
      </Switch>
    </PublicRoutes>
  );
}

export default Routes;
