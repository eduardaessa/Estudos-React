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
  let Link = (props) => (<a class="nav-link" href="props.link"> {props.linkTexto}</a>)
  
  return (
    <>
    <Cabecalho> </Cabecalho>
      <nav>
          <Link link="www.google.com" linkTexto="Google"> </Link>
          <Link link="www.github.com" linkTexto="Github"> </Link>
          <Link link="www.facebook.com" linkTexto="Facebook"> </Link>
      </nav>
    </>
  );
}
