import "./ConteudoPaginaPrincipal.css";
import { Card } from "../../common/Cards/Card";

// function Carda({nome, codigo, disponibilidade}) {

//     return (
//         <div >
//             <h3> {nome} </h3>
//             <span> {codigo} </span>
//         </div>
//     )
// }

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
            <h1> Oi </h1>
            {cards}
            
        </div>
    )
}