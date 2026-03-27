import { Link } from "react-router-dom";

export default function Paraiba() {
  return (
    <div>
      <h1>Estado da Paraiba</h1>
      <div className = "conteudo">
        <img src = "/PB.png" />

        <p>
          Estado do Nordeste, litoral bonito e clima quente, capital João Pessoa, economia baseada
          em serviços, turismo e agricultura, destaque por ser o ponto mais oriental das Américas,
          cultura rica com festas populares e tradição nordestina forte.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}