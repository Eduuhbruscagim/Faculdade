import { Link } from "react-router-dom";

export default function Paraiba() {
  return (
    <div>
      <h1>Estado da Paraiba</h1>
      <div className = "conteudo">
        <img src = "/PB.png" />

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