import { Link } from "react-router-dom";

export default function Parana() {
  return (
    <div>
      <h1>Estado do Parana</h1>
      <div className = "conteudo">
        <img src = "/PR.png" />

        <p>
          Estado do Sul, economia forte e diversificada com destaque para agronegócio, indústria e
          energia, capital Curitiba, conhecido pela boa infraestrutura e qualidade urbana, grande
          produção agrícola (soja, milho, frango), clima mais frio que a média do país e forte
          influência europeia na cultura.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}