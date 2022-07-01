import "./Card.css";

export function Card(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.nome}</h5>
        <p class="card-text">
          {props.codigo}
        </p>
        <a href="#" class="btn btn-primary">
          Saiba mais
        </a>
      </div>
    </div>
  );
}
