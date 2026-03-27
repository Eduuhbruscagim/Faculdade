import { Link } from "react-router-dom";

export default function Maranhao() {
  return (
    <div>
      <h1>Estado do Maranhao</h1>
      <div className = "conteudo">
        <img src = "/MA.png" />

        <p>
          Estado do Nordeste, mistura de Amazônia, cerrado e litoral, capital São Luís, conhecido
          pelos Lençóis Maranhenses, economia baseada em agricultura, pecuária, extrativismo e porto
          estratégico, cultura rica com forte influência indígena, africana e portuguesa.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}