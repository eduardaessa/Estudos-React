import { ConteudoPaginaPrincipal } from "./ConteudoPaginaPrincipal";
import "./PaginaPrincipal.css";

export function Conteudo() {
  return (
    <div>
      <h2> Meu conteúdo </h2>
    </div>
  );
}


export function Container() {
  return (<div> </div>)
}

export function PaginaPrincipal() {
  return (
    <div>
      <ConteudoPaginaPrincipal></ConteudoPaginaPrincipal>

    </div>
  );
}
