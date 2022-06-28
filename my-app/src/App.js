import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';

function App() {
  return (  
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<PaginaPrincipal/>}>

      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
