import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import MeduleList from './index';
import defaultTheme from '../../assets/styles/themes/default';

const list = [{
  name: 'Módulo 01',
  id: 1,
  classes: [
    {
      id: 1,
      date: '00/00/0000',
      id_module: 1,
      name: 'Aula 01',
    },
  ],
}];

it('reders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MeduleList direction="row" list={list} />
      </BrowserRouter>
    </ThemeProvider>,
    div,
  );
});
