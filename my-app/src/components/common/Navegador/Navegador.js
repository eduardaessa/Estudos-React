export function Navegador() {
  let Link = (props) => (<li> <a class="nav-link" href="props.link"> {props.linkTexto} </a> </li>)
  
  return (
    <nav>
      <ul>
        <Link link="www.google.com" linkTexto="Google"></Link>
        <Link link="www.github.com" linkTexto="Github"></Link>
        <Link link="www.facebook.com" linkTexto="Facebook"></Link>
      </ul>
    </nav>
  );
}
