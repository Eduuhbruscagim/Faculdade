import { Link } from "react-router-dom";

export default function Goias() {
  return (
    <div>
      <h1>Estado de Goias</h1>
      <div className = "conteudo">
        <img src = "/GO.png" />

        <p>
          Estado do Centro-Oeste, destaque para o agronegócio (soja, milho, pecuária), capital
          Goiânia, economia também com indústria e mineração, forte crescimento urbano, cultura
          sertaneja bem presente e localização estratégica no país.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}