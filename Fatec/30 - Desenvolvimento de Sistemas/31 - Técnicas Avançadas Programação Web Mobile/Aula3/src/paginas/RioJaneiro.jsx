import { Link } from "react-router-dom";

export default function RioJaneiro() {
  return (
    <div>
      <h1>Estado do Rio de Janeiro</h1>
      <div className = "conteudo">
        <img src = "/RJ.png" />

        <p>
          Estado do Sudeste, capital Rio de Janeiro, um dos principais cartões-postais do Brasil,
          economia baseada em petróleo, turismo e serviços, conhecido por praias famosas e pontos
          como Cristo Redentor e Pão de Açúcar, cultura forte com samba e Carnaval, grandes
          contrastes sociais.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}