import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { Navegador } from './components/common/Navegador/Navegador';

function App() {
  return (  
    <BrowserRouter>
      <Navegador></Navegador>
     <Routes>
      <Route path='/' element={<PaginaPrincipal/>}>
      </Route>
      <Route path='/matriculas' element={<PaginaListarMatriculas/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
