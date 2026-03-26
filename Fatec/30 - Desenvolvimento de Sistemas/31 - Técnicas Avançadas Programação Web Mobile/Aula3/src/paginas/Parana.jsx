import { Link } from "react-router-dom";

export default function Parana() {
  return (
    <div>
      <h1>Estado do Parana</h1>
      <div className = "conteudo">
        <img src = "/PR.png" />

        <p>Minas Gerais é um estado de grande extensão territorial, com economia diversificada e importantes centros urbanos.
          Apesar disso, enfrenta desafios relacionados à infraestrutura e ao desenvolvimento desigual entre suas regiões.
          Questões como acesso a serviços públicos e oportunidades econômicas variam bastante dentro do estado.
          Além disso, problemas ambientais e de gestão também impactam a qualidade de vida em algumas áreas.
        </p>

        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  );
}