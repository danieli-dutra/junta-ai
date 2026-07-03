# Decision Pipeline

**Documento:** AI-004  
**Versão:** 1.0  
**Última atualização:** 03/07/2026  
**Status:** 🚧 Planejado

---

# Objetivo

Este documento define a arquitetura de decisão planejada para o Agente Financeiro do Grana.ai.

Seu objetivo é separar interpretação, regras de negócio e execução de ações, reduzindo dependência do modelo de linguagem para decisões financeiras e tornando o comportamento do sistema previsível, auditável e compatível com futuras integrações via MCP.

Esta arquitetura foi definida durante a evolução do projeto no Lovable e servirá como referência para a implementação da nova versão em código.

---

# Visão Geral

Toda mensagem enviada pelo usuário deverá seguir um fluxo único de processamento.

```text
Mensagem do usuário
        │
        ▼
Intent Recognition
        │
        ▼
Parser
        │
        ▼
Validation
        │
        ▼
Decision Engine
        │
        ▼
Tool / Action
        │
        ▼
Resposta ao usuário
```

Cada etapa possui responsabilidade única e independente.

---

# Etapas do Pipeline

## 1. Intent Recognition

Responsável por identificar o objetivo principal da mensagem.

Exemplos:

- registrar receita
- registrar despesa
- criar meta
- contribuir para uma meta
- consultar informações financeiras
- solicitar conselho financeiro
- corrigir um lançamento

Esta etapa apenas identifica a intenção.

Não extrai valores nem executa ações.

---

## 2. Parser

Responsável por transformar linguagem natural em dados estruturados.

Exemplos de informações extraídas:

- valor
- categoria
- data
- descrição
- tipo de receita
- referência à meta

O parser deve utilizar regras determinísticas sempre que possível antes de recorrer a interpretações do modelo.

---

## 3. Validation

Responsável por verificar se todos os dados obrigatórios para execução estão presentes.

Exemplos:

Receita

Obrigatório:

- valor

Despesa

Obrigatório:

- valor

Meta

Obrigatório:

- nome da meta

Caso existam informações insuficientes, nenhuma ação deverá ser executada.

---

## 4. Decision Engine

Camada responsável por decidir o próximo passo do fluxo.

Exemplos:

- executar operação
- solicitar informação adicional
- solicitar confirmação
- interromper processamento
- encaminhar para resposta conversacional

Toda regra de negócio deverá estar concentrada nesta camada.

---

## 5. Tool / Action

Camada responsável pela execução da ação.

Exemplos futuros:

- registrar receita
- registrar despesa
- atualizar categoria
- consultar dashboard
- criar meta
- atualizar meta

Esta camada será desacoplada do modelo de linguagem.

---

## 6. Response Generation

Após a execução da ação, o agente gera uma resposta em linguagem natural.

Sua responsabilidade é exclusivamente conversacional.

Não deve decidir regras financeiras.

---

# Princípios da Arquitetura

O pipeline foi definido seguindo os seguintes princípios:

- Separação clara de responsabilidades.
- Regras determinísticas antes de IA generativa.
- IA utilizada para comunicação, não para decisões financeiras.
- Fluxo previsível e auditável.
- Facilidade de integração com backend e ferramentas externas.

---

# Compatibilidade com MCP

Esta arquitetura foi planejada para permitir integração futura com servidores MCP.

Nesse cenário:

- o modelo identifica a intenção;
- o pipeline valida as informações;
- ferramentas MCP executam as operações;
- o agente apenas comunica o resultado ao usuário.

Essa separação reduz dependência do modelo e facilita manutenção do sistema.

---

# Estado Atual

Atualmente o projeto ainda utiliza uma arquitetura predominantemente conversacional.

O pipeline descrito neste documento representa a arquitetura alvo para a próxima evolução do Grana.ai.

Sua implementação ocorrerá gradualmente durante a migração para a nova arquitetura baseada em React, Spring Boot e MCP.

---

# Dependências

Este documento está relacionado aos seguintes documentos:

- `system.md`
- `intents.md`
- `parser.md` *(planejado)*
- `memory.md` *(planejado)*
- `tools.md` *(planejado)*
