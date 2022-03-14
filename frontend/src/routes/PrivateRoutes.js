import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import PrivateRoutes from '../layouts/PrivateRoutes';

import Dashboard from '../pages/Admin/Dashboard';
import EditModule from '../pages/Admin/Modules/EditModule';
import ListModules from '../pages/Admin/Modules/ListModules';
import NewModule from '../pages/Admin/Modules/NewModule';
import EditClass from '../pages/Admin/Classes/EditClass';
import ListClasses from '../pages/Admin/Classes/ListClasses';
import NewClass from '../pages/Admin/Classes/NewClass';

function Routes() {
  return (
    <PrivateRoutes>
      <Switch>
        <Route isPrivate path="/dashboard" exact component={Dashboard} />
        <Route isPrivate path="/dashboard/modulos" exact component={ListModules} />
        <Route isPrivate path="/dashboard/modulos/criar" component={NewModule} />
        <Route isPrivate path="/dashboard/modulos/editar/:id" component={EditModule} />
        <Route isPrivate path="/dashboard/aulas" exact component={ListClasses} />
        <Route isPrivate path="/dashboard/aulas/criar" component={NewClass} />
        <Route isPrivate path="/dashboard/aulas/editar/:id" component={EditClass} />
      </Switch>
    </PrivateRoutes>
  );
}

export default Routes;
