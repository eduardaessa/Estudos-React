

export function PaginaPrincipal(){
    let link1 = (<a href="">Home</a>);
    let link2 = (<a href="">Matrículas</a>);
    let link3 = (<a href="">Disciplinas</a>);

    return (<div>
                <nav>
                    <ul>
                        <li> {link1} </li>
                        <li> {link2} </li>
                        <li> {link3} </li>
                    </ul>
                </nav>
                <div>
                    <h2> Meu conteúdo </h2>
                </div>
            </div>)
}