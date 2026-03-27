import { Link } from "react-router-dom";

export default function DistritoFederal() {
  return (
    <div>
      <h1>Estado do Distrito Federal</h1>
      <div className = "conteudo">
        <img src = "/DF.png" />

        <p>
          Unidade onde fica a capital do país, Brasília, não é um estado, centro político do Brasil,
          economia fortemente baseada no setor público e serviços, alto nível de renda média,
          planejamento urbano moderno com destaque para a arquitetura.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}