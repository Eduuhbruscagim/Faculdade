import { Link } from "react-router-dom";

export default function RioGrandeSul() {
  return (
    <div>
      <h1>Estado do Rio grande do sul</h1>
      <div className = "conteudo">
        <img src = "/RS.png" />

        <p>
          Rio Grande do Sul: estado do Sul, capital Porto Alegre, clima mais frio do país, forte
          influência europeia, especialmente alemã e italiana, economia baseada em agronegócio,
          indústria e serviços, cultura marcada pelo tradicionalismo gaúcho, como chimarrão e
          churrasco.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}