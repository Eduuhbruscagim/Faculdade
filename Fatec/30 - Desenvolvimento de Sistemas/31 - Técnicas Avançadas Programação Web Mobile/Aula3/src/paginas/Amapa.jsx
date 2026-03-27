import { Link } from "react-router-dom";

export default function Amapa() {
  return (
    <div>
      <h1>Estado de Amapa</h1>
      <div className = "conteudo">
        <img src = "/AP.png" />

        <p>
          Estado do Norte, coberto em grande parte pela Amazônia preservada, baixa densidade
          populacional e difícil acesso (muitos lugares só por barco ou avião), capital Macapá,
          cortado pela Linha do Equador, economia baseada em extrativismo, mineração e setor
          público.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}