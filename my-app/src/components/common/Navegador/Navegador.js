import "./Navegador.css";

export function Navegador() {
  let Link = (props) => (<a class="nav-link" href="props.link"> {props.linkTexto}</a>)
  
  return (
    <nav>
        <Link link="www.google.com" linkTexto="Google"> </Link>
        <Link link="www.github.com" linkTexto="Github"> </Link>
        <Link link="www.facebook.com" linkTexto="Facebook"> </Link>
    </nav>
  );
}
