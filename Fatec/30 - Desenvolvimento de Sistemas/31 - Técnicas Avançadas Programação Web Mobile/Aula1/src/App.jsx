export default function App()

{

  let nome, idade, altura;

  nome = "Eduardo";
  idade = 19;
  altura = 1.76;

  return (
    <div>
       <h1>Hello World !</h1> 

       <p style={{color : 'red'}} >
        Olá, seja bem vindo ao React e JavaScript
       </p>

       <p>Olá <b> {nome}  </b> Seja bem vindo ao React</p>

       <p>Olá, seja bem vindo ao React com JavaScript</p>

       <p>Olá, {nome} seja bem vindo ao React</p>

       <p>Sua idade é {idade} e sua altura é {altura} metros</p>

       <p>Você já viveu {idade * 365} dias.</p>

       <p>Sua idade é {idade} e sua altura é {altura} metros</p>

       <p>Sua idade é <span style = { { color : 'blue' }}> {idade}</span> anos </p>



    </div>
  );
}