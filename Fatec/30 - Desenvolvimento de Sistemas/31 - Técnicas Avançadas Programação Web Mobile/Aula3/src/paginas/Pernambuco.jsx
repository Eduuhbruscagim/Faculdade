import { Link } from "react-router-dom";

export default function Pernambuco() {
  return (
    <div>
      <h1>Estado de Pernambuco</h1>
      <div className = "conteudo">
        <img src = "/PE.png" />

        <p>
          Estado do Nordeste, capital Recife, economia diversificada com indústria, comércio,
          turismo e tecnologia (Porto Digital), litoral forte com praias famosas e Recife como polo
          urbano importante, cultura marcante com frevo, maracatu e Carnaval tradicional.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}