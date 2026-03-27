import { Link } from "react-router-dom";

export default function SantaCatarina() {
  return (
    <div>
      <h1>Estado de Santa Catarina</h1>
      <div className = "conteudo">
        <img src = "/SC.png" />

        <p>
          Estado do Sul, capital Florianópolis, forte economia com indústria, tecnologia, turismo e
          agronegócio, litoral com praias muito procuradas e interior com cidades de influência
          alemã e italiana, alto índice de qualidade de vida e desenvolvimento.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}