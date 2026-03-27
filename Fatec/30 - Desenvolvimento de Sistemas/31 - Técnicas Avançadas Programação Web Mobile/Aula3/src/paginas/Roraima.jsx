import { Link } from "react-router-dom";

export default function Roraima() {
  return (
    <div>
      <h1>Estado de Roraima</h1>
      <div className = "conteudo">
        <img src = "/RR.png" />

        <p>
          Estado do Norte, o mais ao norte do Brasil, capital Boa Vista, grande parte coberta pela
          Amazônia e terras indígenas, baixa densidade populacional, economia baseada no setor
          público, agricultura e garimpo, acesso limitado ao restante do país por rodovias.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}