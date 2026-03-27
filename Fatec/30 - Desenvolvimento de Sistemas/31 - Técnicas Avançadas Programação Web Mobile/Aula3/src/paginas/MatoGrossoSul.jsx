import { Link } from "react-router-dom";

export default function MatoGrossoSul() {
  return (
    <div>
      <h1>Estado do Mato Grosso do Sul</h1>
      <div className = "conteudo">
        <img src = "/MS.png" />

        <p>
          Estado do Centro-Oeste, conhecido pelo Pantanal (uma das maiores áreas
          alagadas do mundo), capital Campo Grande, economia baseada no agronegócio (pecuária e
          soja), turismo ecológico forte, especialmente em Bonito, e baixa densidade populacional.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}