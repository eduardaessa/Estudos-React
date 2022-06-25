export function ConteudoPaginaPrincipal(){
    let disciplinas = [
        {nome: "PIW",
        codigo: "QXD123"},
        {nome: "DSW",
        codigo: "QXD321"}
    ]
    let lis = disciplinas.map((disciplina)=>(<li> {disciplina.nome} - {disciplina.codigo} </li>));
    return (
        <ul>
            {lis}
        </ul>
    )

}