import "./ConteudoPaginaPrincipal.css";
import classNames from 'classnames';

function Card({nome, codigo, disponibilidade}) {
    let nomeClasse = classNames("card", {
        "fundo-vermelho": !disponibilidade, "fundo-azul": disponibilidade
    })
    // let nomeClasse = "card ";
    // if(disponibilidade===false){
    //     nomeClasse += "fundo-vermelho";
    // } else {
    //     nomeClasse += "fundo-azul";
    // }
    return (
        <div className={nomeClasse}>
            <h3> {nome} </h3>
            <span> {codigo} </span>
        </div>
    )
}

export function ConteudoPaginaPrincipal(){
    let disciplinas = [
        {nome: "PIW",
        codigo: "QXD123",
        disponibilidade: false},
        {nome: "DSW",
        codigo: "QXD321",
        disponibilidade: true}
    ]

    let cards = disciplinas.map((disciplina)=>(<Card nome={disciplina.nome} codigo={disciplina.codigo} disponibilidade={disciplina.disponibilidade}></Card>))

    return (
        <div className="container">
                {cards}
        </div>
    )
}