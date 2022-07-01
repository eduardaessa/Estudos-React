import "./ConteudoPaginaPrincipal.css";
import { Card } from "../../common/Cards/Card";

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