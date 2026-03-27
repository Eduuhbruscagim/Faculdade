# 📘 React - Componentes e Props (Exemplo1)

## 📌 Descrição

Este projeto demonstra o uso de **componentes e props no React** para realizar uma operação simples: **somar dois números e exibir o resultado na tela**.

A aplicação possui um componente principal (`App.jsx`) que chama um componente secundário (`Exemplo1.jsx`), passando valores via props.

---

## 🚀 Funcionalidade

O sistema exibe:

```
Chamadas para o componente Exemplo1
Número 1 : 10
Número 2 : 20
A soma é : 30
```

---

## 🧠 Conceitos aplicados

### 🔹 1. Componentização

Separação da lógica em componentes reutilizáveis.

* `App.jsx` → Componente principal
* `Exemplo1.jsx` → Componente responsável pela soma

---

### 🔹 2. Props (Propriedades)

Os valores são passados do componente pai para o filho:

```jsx
<Exemplo1 numero1={10} numero2={20} />
```

---

### 🔹 3. Desestruturação de Props

No componente `Exemplo1`, as props são recebidas diretamente:

```js
export default function Exemplo1({ numero1, numero2 })
```

---

### 🔹 4. Conversão de tipos

Uso de `Number()` para garantir que os valores sejam tratados como números:

```js
let soma = Number(numero1) + Number(numero2);
```

---

### 🔹 5. JSX com múltiplas linhas

Uso de `<br/>` para quebra de linha:

```jsx
<p>
  Número 1 : {numero1} <br/>
  Número 2 : {numero2} <br/>
  A soma é : {soma}
</p>
```

---

## 🗂 Estrutura do projeto

```
/Aula2
  ├──src/
    ├── App.jsx
    ├── Exemplo1.jsx
    ├── App.css
```

---

## 📄 Arquivos principais

### 📌 App.jsx

Responsável por renderizar o layout principal e chamar o componente:

* Título da página
* Container `.card`
* Chamada do componente com props

---

### 📌 Exemplo1.jsx

Responsável por:

* Receber os valores via props
* Calcular a soma
* Exibir os resultados

---

### 🎨 App.css

Define o estilo visual da aplicação:

* Reset básico (`margin` e `padding`)
* Estilo do título (`h1`)
* Card centralizado com borda arredondada

Exemplo:

```css
.card {
  background-color: rgb(0, 238, 255);
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  margin: 20px auto;
}
```

---

## ▶️ Como executar

1. Instale as dependências:

```
npm install
```

2. Execute o projeto:

```
npm run dev
```

---

## ⚠️ Observações

* Projeto focado em aprendizado de **props e componentes**
* A conversão com `Number()` evita problemas caso os valores venham como string
* Estrutura simples passada em aula

---
