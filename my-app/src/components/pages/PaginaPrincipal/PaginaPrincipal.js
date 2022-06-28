import { Navegador } from "../../common/Navegador/Navegador";
import { ConteudoPaginaPrincipal } from "../PaginaPrincipal/ConteudoPaginaPrincipal";
import "./PaginaPrincipal.css";

export function Conteudo() {
  return (
    <div>
      <h2> Meu conteúdo </h2>
    </div>
  );
}

export function Cabecalho({ paginaAtual }) {
  return (
    <header>
      <h1> Matrícula UFC </h1>
      <span> Você está na {paginaAtual} </span>
    </header>
  );
}

export function Container() {
  return (<div> </div>)
}

export function PaginaPrincipal() {
  return (
    <div>
      <Cabecalho paginaAtual="Página Principal"></Cabecalho>
      <Navegador></Navegador>
      <ConteudoPaginaPrincipal> </ConteudoPaginaPrincipal>
    </div>
  );
}
