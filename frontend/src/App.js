import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Routes from './Routes';
// eslint-disable-next-line no-unused-vars
import PublicRoutes from './layouts/PublicRoutes';
import PrivateRoutes from './layouts/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {/* <PublicRoutes>
          <Routes />
        </PublicRoutes> */}
        <PrivateRoutes>
          <Routes />
        </PrivateRoutes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
