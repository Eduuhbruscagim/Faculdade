import { Link } from "react-router-dom";

export default function Bahia() {
  return (
    <div>
      <h1>Estado da Bahia</h1>
      <div className = "conteudo">
        <img src = "/BA.png" />

        <p>
          Estado do Nordeste, um dos mais históricos e culturalmente ricos do Brasil, capital
          Salvador, forte influência africana na cultura, culinária e religião, litoral extenso com
          turismo forte, economia baseada em turismo, agricultura, petróleo e serviços, conhecido
          por festas como o Carnaval e tradições como capoeira e candomblé.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}