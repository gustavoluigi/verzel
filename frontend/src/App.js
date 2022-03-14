/* eslint-disable react/jsx-no-constructed-context-values */
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './services/history';
import { AuthProvider } from './context/authContext';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
