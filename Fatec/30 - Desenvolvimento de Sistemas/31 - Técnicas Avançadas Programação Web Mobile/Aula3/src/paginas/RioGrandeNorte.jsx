import { Link } from "react-router-dom";

export default function RioGrandeNorte() {
  return (
    <div>
      <h1>Estado do Rio Grande do Norte</h1>
      <div className = "conteudo">
        <img src = "/RN.png" />

        <p>
          Estado do Nordeste, capital Natal, conhecido pelas praias, dunas e forte turismo, economia
          baseada em turismo, petróleo e energia eólica, clima quente e ventos constantes,
          importante produtor de sal no Brasil.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}