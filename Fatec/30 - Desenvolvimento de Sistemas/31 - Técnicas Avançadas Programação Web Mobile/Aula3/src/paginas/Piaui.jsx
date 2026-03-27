import { Link } from "react-router-dom";

export default function Piaui() {
  return (
    <div>
      <h1>Estado do Piaui</h1>
      <div className = "conteudo">
        <img src = "/PI.png" />

        <p>
          Estado do Nordeste, um dos menos populosos, litoral pequeno comparado aos vizinhos,
          capital Teresina (única capital nordestina que não fica no litoral), economia baseada em
          agricultura, pecuária e serviços, destaque para o Parque Nacional da Serra da Capivara,
          com sítios arqueológicos importantes.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}