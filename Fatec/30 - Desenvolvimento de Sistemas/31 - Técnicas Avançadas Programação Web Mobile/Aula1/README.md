# 📘 React Hello World Dinâmico

## 📌 Descrição

Este projeto é um componente simples em **React com JavaScript, HTML e CSS** que exibe mensagens dinâmicas na tela utilizando variáveis e interpolação.

Ele demonstra conceitos básicos como:

- JSX
- Renderização dinâmica
- Uso de variáveis
- Exibição de dados formatados

---

## 🚀 Funcionalidades

O componente exibe diferentes variações de mensagens, incluindo:

- Mensagem padrão:
  - `Hello World!`
  - `Olá, seja bem vindo ao React e JavaScript`

- Mensagens personalizadas com nome:
  - `Olá Eduardo, seja bem vindo ao React`

- Mensagens com dados dinâmicos:
  - Idade e altura
  - Tempo de vida em dias

Exemplo:

```
Minha idade é 19 e minha altura é 1.76 metros
Eu já vivi 6935 dias
Minha idade é 19 anos
```

---

## 🧠 Conceitos aplicados

### 1. JSX (JavaScript XML)

Permite misturar HTML com JavaScript dentro do React.

```jsx
<h1>Olá, {nome} seja bem vindo ao React</h1>
```

---

### 2. Variáveis dinâmicas

Os dados são armazenados em variáveis:

```js
let nome = 'Eduardo'
let idade = 19
let altura = 1.76
```

---

### 3. Cálculo de dias vividos

Cálculo simples baseado na idade:

```js
let idade * 365;
```

Obs: não considera anos bissextos, é apenas uma aproximação.

---

### 4. Renderização de múltiplas mensagens

Uso de múltiplos elementos JSX:

```jsx
<p>Hello World!</p>
<p>Olá, seja bem vindo ao React</p>
```

---

## 🗂 Estrutura do arquivo

```
/Aula1
  └──src/
     ├── App.jsx
     ├── App.css
```

---

## 🎨 Estilização (CSS)

O CSS pode ser usado para:

- Centralizar conteúdo
- Ajustar fonte
- Melhorar espaçamento

Exemplo:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
```

---

## ▶️ Como executar

1. Instale as dependências:

```
npm install
```

2. Inicie o projeto:

```
npm run dev
```

---
