import { BrowserRouter, Switch } from 'react-router-dom';
import EditClass from '../pages/Admin/Classes/EditClass';
import ListClasses from '../pages/Admin/Classes/ListClasses';
import NewClass from '../pages/Admin/Classes/NewClass';
import Dashboard from '../pages/Admin/Dashboard';
import EditModule from '../pages/Admin/Modules/EditModule';
import ListModules from '../pages/Admin/Modules/ListModules';
import NewModule from '../pages/Admin/Modules/NewModule';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Modules from '../pages/Modules';
import Register from '../pages/Register';
import CustomRoute from './CustomRoute';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
// import PrivateRoutes from '../layouts/PrivateRoutes';
// import PublicRoutes from '../layouts/PublicRoutes';
import Sidebar from '../layouts/Sidebar';
import useAuth from '../context/hooks/useAuth';

export default function Routes() {
  const { authenticated } = useAuth();
  // console.log(authenticated);
  // return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
  return (

    <BrowserRouter>
      {!authenticated && (

      <PublicRoutes>
        <CustomRoute path="/" exact component={Home} />
        <CustomRoute path="/modulos" exact component={Modules} />
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute path="/cadastro" exact component={Register} />
      </PublicRoutes>
      )}

      {authenticated && (

      <PrivateRoutes>
        <CustomRoute isPrivate path="/dashboard" exact component={Dashboard} />
        <CustomRoute isPrivate path="/dashboard/modulos" exact component={ListModules} />
        <CustomRoute isPrivate path="/dashboard/modulos/criar" component={NewModule} />
        <CustomRoute isPrivate path="/dashboard/modulos/editar/:id" component={EditModule} />
        <CustomRoute isPrivate path="/dashboard/aulas" exact component={ListClasses} />
        <CustomRoute isPrivate path="/dashboard/aulas/criar" component={NewClass} />
        <CustomRoute isPrivate path="/dashboard/aulas/editar/:id" component={EditClass} />
      </PrivateRoutes>
      )}
    </BrowserRouter>

  );
  // return <PrivateRoutes />;
  // return <PublicRoutes />;
}
