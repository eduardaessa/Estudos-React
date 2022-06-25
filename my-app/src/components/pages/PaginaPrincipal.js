import { Navegador } from "../common/Navegador/Navegador";
import { ConteudoPaginaPrincipal } from "./ConteudoPaginaPrincipal";

export function Conteudo() {
  return (
    <div>
      <h2> Meu conteúdo </h2>
    </div>
  );
}

export function Cabecalho({paginaAtual}) {
  return (
    <header>
      <h1> Matrícula UFC </h1>
      <span> Você está na {paginaAtual} </span>
    </header>
  );
}

export function PaginaPrincipal() {
  return (
    <div>
      <Cabecalho paginaAtual="Página Principal"></Cabecalho>
      <Navegador></Navegador>
      <ConteudoPaginaPrincipal></ConteudoPaginaPrincipal>
    </div>
  );
}
