import { Link } from 'react-router-dom'

export default function Acre() {
  return (
    <div>
      <h1>Estado do Acre</h1>
      <div className = "conteudo">
        <img src = "/AC.png" />

        <p>
          Localizado no extremo oeste da Amazônia, o Acre tem florestas densas e rios importantes.
          Sua economia gira em torno da agricultura, pecuária e produtos extrativos. É famoso pela
          cultura indígena e pelo Festival de Cinema de Rio Branco.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}
