import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Admin/Dashboard';
import Modules from './pages/Modules';
import Login from './pages/Login';
import Register from './pages/Register';

import EditModule from './pages/Admin/Modules/EditModule';
import ListModules from './pages/Admin/Modules/ListModules';
import NewModule from './pages/Admin/Modules/NewModule';

import EditClass from './pages/Admin/Classes/EditClass';
import ListClasses from './pages/Admin/Classes/ListClasses';
import NewClass from './pages/Admin/Classes/NewClass';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/modulos" exact component={Modules} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastro" exact component={Register} />
      <Route path="/dashboard/modulos" exact component={ListModules} />
      <Route path="/dashboard/modulos/criar" component={NewModule} />
      <Route path="/dashboard/modulos/editar/:id" component={EditModule} />
      <Route path="/dashboard/aulas" exact component={ListClasses} />
      <Route path="/dashboard/aulas/criar" component={NewClass} />
      <Route path="/dashboard/aulas/editar" component={EditClass} />
    </Switch>
  );
}

export default Routes;
