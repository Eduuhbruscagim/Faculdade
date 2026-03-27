import { Link } from "react-router-dom";

export default function Tocantins() {
  return (
    <div>
      <h1>Estado de Tocantins</h1>
      <div className = "conteudo">
        <img src = "/TO.png" />

        <p>
          Estado do Norte, um dos mais novos do Brasil (criado em 1988), capital Palmas planejada,
          economia baseada em agronegócio, pecuária e serviços, presença de cerrado predominante,
          crescimento recente com expansão agrícola e urbana.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}