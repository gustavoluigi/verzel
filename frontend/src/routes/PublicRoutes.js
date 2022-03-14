import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Route path="/" exact component={Home} />
        <Route path="/modulos" exact component={Modules} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Register} />
      </Switch>
    </PublicRoutes>
  );
}

export default Routes;
