import { Link } from "react-router-dom";

export default function SaoPaulo() {
  return (
    <div>
      <h1>Estado de Sao Paulo</h1>
      <div className = "conteudo">
        <img src = "/SP.png" />

        <p>
          Estado do Sudeste, mais populoso e economicamente forte do Brasil, capital São
          Paulo, principal centro financeiro e industrial do país, economia extremamente
          diversificada, grande influência cultural e urbana, infraestrutura avançada e forte
          presença no comércio, serviços e tecnologia.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}