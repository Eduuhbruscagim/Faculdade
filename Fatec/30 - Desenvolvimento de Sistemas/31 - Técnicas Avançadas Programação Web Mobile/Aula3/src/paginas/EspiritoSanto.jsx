import { Link } from "react-router-dom";

export default function EspiritoSanto() {
  return (
    <div>
      <h1>Estado do Espirito Santo</h1>
      <div className = "conteudo">
        <img src = "/ES.png" />

        <p>
          Estado do Sudeste, com litoral bonito e montanhas no interior, capital Vitória, economia
          baseada em portos, exportação (minério e café), indústria e petróleo, menos visado que RJ
          e SP mas com boa qualidade de vida e crescimento constante.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}