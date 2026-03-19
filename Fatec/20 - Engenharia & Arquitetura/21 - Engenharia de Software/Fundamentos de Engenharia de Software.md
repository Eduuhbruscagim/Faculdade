## Aula 1 + Aula 2 — Resumo Organizado
---

> [!info] Objetivo deste material  
> Juntar o conteúdo das duas aulas de um jeito simples, organizado e fácil de revisar depois.

---
# 1. Ambiente Corporativo

## Papel do software na empresa

Um software dentro de uma empresa precisa ajudar em três níveis:

### Estratégico (Topo)

- Alta direção
    
- Decisões de longo prazo
    
- Visão geral da empresa
    
- Relatórios e indicadores
    

### Tático (Meio)

- Gerentes
    
- Planejamento por setor
    
- Controle de metas
    
- Relatórios de acompanhamento
    

### Operacional (Base)

- Trabalho do dia a dia
    
- Rotinas como Vendas, RH e Produção
    
- Muitas tarefas e registros
    

> [!important]  
> Um sistema bom precisa funcionar para os três níveis, não só para um.

---
## ERP

ERP é um sistema que junta as informações de vários setores em um lugar só.
### Vantagens:

- Tudo fica integrado
    
- Menos retrabalho
    
- Fica mais fácil enxergar o negócio
    
- Ajuda a tomar decisões melhores
    

---
## Modelos de distribuição

### SaaS (Software as a Service)

- Sistema na nuvem
    
- Geralmente pago por assinatura
    
- Atualizações feitas pelo fornecedor
    

### Custom (Sob medida)

- Feito para um cliente específico
    
- Atende melhor as regras do negócio
    
- Manutenção mais personalizada
    

---
# 2. Composição de um Sistema

## Tríade principal

```
Pessoas + Processos + Tecnologia
```

- Pessoas: quem usa, quem gerencia e quem desenvolve
    
- Processos: como o trabalho é feito
    
- Tecnologia: ferramenta usada para automatizar
    

> [!warning]  
> Se o processo for ruim, o software só vai deixar o erro mais aparente.

---
# 3. Ciclo de Vida do Software (SDLC)

## Etapas principais

1. Concepção
    
2. Projeto Lógico
    
3. Projeto Físico
    
4. Testes
    
5. Produção
    
6. Manutenção
    

---
## 3.1 Concepção

É o começo de tudo.

- Entender o problema
    
- Ver se vale a pena fazer
    
- Definir objetivo
    
- Identificar quem está envolvido
    

---
## 3.2 Projeto Lógico

Aqui a ideia é organizar como o sistema vai funcionar antes de programar.

- Regras de negócio
    
- UML (diagramas)
    
- Casos de uso
    
- Requisitos
    

Foco: pensar bem antes de sair codando.

---
## 3.3 Projeto Físico

Aqui entra a parte prática.

- Código
    
- Banco de dados (SGBD)
    
- Interface
    
- Implementação técnica
    

---
## 3.4 Testes

Servem para garantir que o sistema está funcionando direito.

### Tipos:

- Unitário: testa partes separadas
    
- Integração: testa comunicação entre partes
    
- Validação (Key Users): usuários-chave testam e aprovam
    

---
## 3.5 Produção

Sistema sendo usado de verdade.

---
## 3.6 Manutenção

Depois que o sistema está no ar, ele continua mudando.

### Tipos:

- Corretiva: corrigir erros (bugs)
    
- Adaptativa: ajustar por mudanças externas (ex: lei nova)
    
- Evolutiva: adicionar melhorias e novas funções
    

> [!note]  
> Manutenção é normal. Todo sistema passa por isso.

---
# 4. Engenharia de Requisitos

## Requisitos Funcionais

São as funções do sistema, ou seja, o que ele faz.

Exemplos:

- Cadastrar cliente
    
- Emitir nota
    
- Gerar relatório
    

---
## Requisitos Não-Funcionais

São as qualidades e regras do sistema, ou seja, como ele deve ser.

Exemplos:

- Rápido (performance)
    
- Seguro
    
- Fácil de usar
    
- Fácil de manter
    
- Funcionar em mais de um ambiente
    

---
# 5. Levantamento de Requisitos

## Técnicas usadas

- Entrevista
    
- Questionário
    
- Observação
    
- Brainstorming
    
- Walkthrough
    
- Análise de documentos
    

> [!important]  
> Muitas vezes o usuário fala a solução que ele imagina.  
> O papel do engenheiro é entender o problema real.

---
# 6. Stakeholders

Stakeholders são as pessoas envolvidas ou afetadas pelo sistema.

Exemplos:

- Cliente
    
- Usuário final
    
- Gestores
    
- Desenvolvedores
    
- Investidores
    
- Key Users
    

> Nem todo cliente vai usar o sistema.  
> Nem todo usuário tem poder de decisão.

---
# 7. Qualidade de Software

São características que deixam o sistema melhor.

- Usabilidade (fácil de usar)
    
- Reusabilidade (aproveitar partes em outros sistemas)
    
- Manutenibilidade (fácil de corrigir e melhorar)
    
- Portabilidade (rodar em outros ambientes)
    
- Expansibilidade (fácil de crescer)
    
- Armazenamento seguro
    

Tudo isso entra em requisitos não-funcionais.

---
# 8. Segurança da Informação

A base é a tríade CID:

## Confidencialidade

Só pessoas autorizadas podem acessar.

## Integridade

Os dados não podem ser alterados de forma errada.

## Disponibilidade

O sistema e os dados devem estar disponíveis quando precisar.

---
# 9. Arquitetura e Camadas

Um sistema bem feito costuma seguir estas ideias:

- Separar responsabilidades
    
- Baixo acoplamento (partes menos dependentes entre si)
    
- Alta coesão (cada parte faz bem seu papel)
    
- Organização em camadas
    

### Exemplo de camadas:

- Interface
    
- Aplicação
    
- Domínio
    
- Infraestrutura
    

> Isso ajuda muito na manutenção e nas melhorias futuras.

---
# Mapa Mental Resumido

```
Empresa -> Estratégico / Tático / Operacional
Sistema -> Pessoas + Processos + Tecnologia
Desenvolvimento -> SDLC
Qualidade -> Requisitos Não-Funcionais
Segurança -> CID
```

---
# Conclusão

Engenharia de Software não é só programar.

É também:

- Entender o negócio
    
- Organizar a solução
    
- Garantir qualidade
    
- Pensar no futuro do sistema
    
- Evitar dor de cabeça depois
    
---
