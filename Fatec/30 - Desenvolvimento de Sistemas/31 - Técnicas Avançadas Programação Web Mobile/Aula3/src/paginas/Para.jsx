import { Link } from "react-router-dom";

export default function Para() {
  return (
    <div>
      <h1>Estado do Para</h1>
      <div className="conteudo">
        <img src="/PA.png" />

        <p>
          Estado do Norte, um dos maiores do Brasil, forte presença da Amazônia, capital Belém,
          economia baseada em mineração (ferro), extrativismo, agropecuária e portos, grande
          importância ambiental e biodiversidade, desafios sociais e de infraestrutura em várias
          regiões.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}