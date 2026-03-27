# 📘 React - Estados do Brasil (Rotas)

## 📌 Descrição

Este projeto demonstra o uso de **rotas no React** para navegar entre páginas que representam **estados do Brasil**.

A aplicação utiliza o `react-router-dom` para criar navegação entre componentes, simulando um mini sistema de páginas.

---

## 🚀 Funcionalidade

A aplicação possui:

* Página inicial (**Home**)
* Navegação entre páginas de estados
* Rotas definidas manualmente

Exemplo de rota:

```id="p3xk1a"
<Route path="/estados/sp" element={<SaoPaulo />} />
```

---

## 🧠 Conceitos aplicados

### 🔹 1. React Router

Gerenciamento de rotas dentro da aplicação:

```jsx id="y8m2qw"
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---

### 🔹 2. Navegação com Link

Permite navegar sem recarregar a página:

```jsx id="l9c3re"
<Link to="/estados/sp">São Paulo</Link>
```

---

### 🔹 3. Componentização

Cada estado é um componente separado:

```id="t4zn6h"
/src/paginas/
 ├── SaoPaulo.jsx
 ├── Acre.jsx
 ├── Alagoas.jsx
```

---

### 🔹 4. Estrutura de Rotas

Organização das rotas dentro do `App.jsx`:

```jsx id="b7v1od"
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/estados/sp" element={<SaoPaulo />} />
</Routes>
```

---

## 🗂 Estrutura do projeto

```id="q2n8mf"
/src
 ├── App.jsx
 ├── App.css
 ├── paginas/
 │    ├── Home.jsx
 │    ├── SaoPaulo.jsx
 │    ├── Acre.jsx
 │    ├── Alagoas.jsx
```

---

## 📄 Páginas

### 📌 Home.jsx

* Página inicial
* Contém links para os estados

---

### 📌 Estados (ex: SaoPaulo.jsx)

Cada página representa um estado e pode conter:

* Nome do estado
* Informações básicas
* Estrutura simples com JSX

Exemplo:

```jsx id="w6kz9n"
export default function SaoPaulo() {
  return <h2>Estado de São Paulo</h2>;
}
```

---

## 🎨 Estilização (CSS)

Responsável por:

* Layout geral
* Estilo de links
* Centralização de conteúdo

Exemplo:

```css id="h1s9qp"
body {
  font-family: Arial, sans-serif;
}
```

---

## ▶️ Como executar

1. Instale as dependências:

```id="j5d8vr"
npm install
```

2. Execute o projeto:

```id="c0k2bm"
npm run dev
```

---