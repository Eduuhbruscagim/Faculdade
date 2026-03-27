import { Link } from 'react-router-dom'

export default function Alagoas() {
  return (
    <div>
      <h1>Estado de Alagoas</h1>
      <div className = "conteudo">
        <img src = "/AL.png" />

        <p>
          Estado pequeno do Nordeste, famoso pelo litoral bonito com águas bem claras (tipo
          Maragogi, apelidado de “Caribe brasileiro”), economia baseada em turismo, cana-de-açúcar e
          serviços, capital Maceió, cultura forte no artesanato e no forró.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}
