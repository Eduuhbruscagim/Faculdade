import { Link } from "react-router-dom";

export default function Amazonas() {
  return (
    <div>
      <h1>Estado do Amazonas</h1>
      <div className = "conteudo">
        <img src = "/AM.png" />

        <p>
          Maior estado do Brasil, localizado na região Norte, dominado pela Floresta Amazônica e
          pela maior bacia hidrográfica do mundo, destaque para o Rio Amazonas, capital Manaus,
          economia baseada na Zona Franca (indústria), extrativismo e turismo ecológico, baixa
          densidade populacional fora da capital, forte presença de povos indígenas e biodiversidade
          extremamente rica.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}