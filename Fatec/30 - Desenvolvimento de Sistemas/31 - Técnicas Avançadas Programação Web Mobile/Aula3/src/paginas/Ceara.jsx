import { Link } from "react-router-dom";

export default function Ceara() {
  return (
    <div>
      <h1>Estado do Ceara</h1>
      <div className = "conteudo">
        <img src = "/CE.png" />

        <p>
          Estado do Nordeste, conhecido pelo turismo de praias e dunas (como Jericoacoara), clima
          semiárido no interior, capital Fortaleza, economia baseada em turismo, comércio, indústria
          e energia eólica, destaque para o humor e a cultura popular forte.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}