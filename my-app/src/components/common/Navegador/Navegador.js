import { NavLink } from "react-router-dom";
import "./Navegador.css";

function Cabecalho({ paginaAtual }) {
  return (
    <header>
      <h1> Matrícula UFC </h1>
      <span> Você está na {paginaAtual} </span>
    </header>
  );
}

export function Navegador() {
  return (
    <>
      <Cabecalho> </Cabecalho>
        <nav>
          <NavLink
            exact
            className="nav-link"
            to="/">
              Página Principal
          </NavLink>
          <NavLink
            className="nav-link"
            to="/matriculas">
              Matriculas
          </NavLink>
            
        
        </nav>
    </>
  );
}
