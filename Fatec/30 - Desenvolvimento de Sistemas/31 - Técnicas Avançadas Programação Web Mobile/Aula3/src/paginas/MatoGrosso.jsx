import { Link } from "react-router-dom";

export default function MatoGrosso() {
  return (
    <div>
      <h1>Estado do Mato Grosso</h1>
      <div className="conteudo">
        <img src="/MT.png" />

        <p>
          Estado do Centro-Oeste, um dos maiores produtores agrícolas do Brasil (soja,
          milho e algodão), grande extensão territorial com áreas de Amazônia, cerrado e Pantanal,
          capital Cuiabá, economia fortemente ligada ao agronegócio e exportação, baixa densidade
          populacional em várias regiões.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}