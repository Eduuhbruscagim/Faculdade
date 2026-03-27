import { Link } from "react-router-dom";

export default function Sergipe() {
  return (
    <div>
      <h1>Estado de Sergipe</h1>
      <div className = "conteudo">
        <img src = "/SE.png" />

        <p>
          Menor estado do Brasil, localizado no Nordeste, capital Aracaju, litoral com praias
          tranquilas e turismo regional, economia baseada em serviços, petróleo, gás e agricultura,
          ritmo mais calmo comparado a outros estados maiores.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}