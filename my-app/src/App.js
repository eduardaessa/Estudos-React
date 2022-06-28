import './App.css';
import { ConteudoPaginaPrincipal } from './components/pages/PaginaPrincipal/ConteudoPaginaPrincipal.js';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas.js';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route path='/matricula'>
        <PaginaListarMatriculas></PaginaListarMatriculas>
      </Route>
    </BrowserRouter>

  );
}

export default App;
