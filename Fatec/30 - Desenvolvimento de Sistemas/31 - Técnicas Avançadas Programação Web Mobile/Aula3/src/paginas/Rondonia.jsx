import { Link } from "react-router-dom";

export default function Rondonia() {
  return (
    <div>
      <h1>Estado do Rondonia</h1>
      <div className = "conteudo">
        <img src = "/RO.png" />

        <p>
          Estado do Norte, localizado na Amazônia, capital Porto Velho, economia baseada em
          agropecuária, madeira e energia (hidrelétricas no Rio Madeira), crescimento populacional
          ligado à migração, desafios ambientais com desmatamento.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}