# Memória Conversacional

**Documento:** AI-006  
**Versão:** 1.0  
**Última atualização:** 07/07/2026  
**Status:** ✅ Implementado (MVP)

---

# Objetivo

Este documento descreve como o agente financeiro utiliza memória conversacional para manter o contexto durante uma interação com o usuário.

A memória permite que o agente continue operações iniciadas anteriormente, compreenda referências implícitas e conduza fluxos de confirmação sem exigir que todas as informações sejam repetidas pelo usuário.

Nesta versão do projeto, a memória possui escopo conversacional e não representa uma memória permanente do usuário.

---

# Objetivo da Memória

A memória é utilizada para:

- manter o contexto da conversa atual;
- identificar a última transação mencionada;
- concluir operações iniciadas em mensagens anteriores;
- permitir confirmações em múltiplas etapas;
- manter o estado de fluxos conversacionais.

Ela não substitui a persistência de dados financeiros.

---

# Fluxo

De forma simplificada, o uso da memória ocorre após o processamento da mensagem.

```text
Mensagem

        │

        ▼

Parser

        │

        ▼

Categorização

        │

        ▼

Atualização do contexto

        │

        ▼

Resposta ao usuário
```

---

# Contexto Conversacional

O agente mantém informações suficientes para compreender referências feitas pelo usuário durante a conversa.

Exemplo validado:

```text
compra no mercado 85
```

↓

```text
mercado é alimentação
```

O agente identifica que "mercado" faz referência ao lançamento imediatamente anterior e realiza a atualização da categoria.

---

Outro exemplo:

```text
trocar categoria
```

↓

O agente solicita qual categoria deverá ser utilizada e conclui a operação após a resposta do usuário.

---

# Estado da Conversa

Durante determinados fluxos, o agente mantém um estado temporário da interação.

Exemplos observados:

- aguardando confirmação para alterar categoria;
- aguardando definição da nova categoria;
- aguardando confirmação para cadastrar recorrência.

Esse estado é utilizado apenas para concluir a operação iniciada.

---

# Relação com Outras Funcionalidades

A memória conversacional é utilizada por outros componentes do agente, incluindo:

- correção de categorias;
- confirmação de recorrências;
- atualização de metas;
- continuidade do diálogo.

---

# Limitações Atuais

Até a versão atual foram identificadas as seguintes limitações:

- a memória está restrita à conversa atual;
- não existe memória permanente entre sessões;
- o agente não aprende automaticamente com interações anteriores;
- preferências do usuário não são armazenadas;
- correções realizadas não alteram automaticamente classificações futuras.

---

# Planejamento

As seguintes evoluções estão previstas para futuras versões.

## Memória de Longo Prazo

O agente poderá manter informações persistentes sobre o usuário, como:

- preferências de categorização;
- categorias utilizadas com maior frequência;
- padrões financeiros;
- hábitos de lançamento.

---

## Perfil Financeiro

O agente poderá construir um perfil financeiro progressivamente.

Exemplos:

- principais fontes de renda;
- categorias mais frequentes;
- gastos recorrentes;
- sazonalidade;
- comportamento financeiro.

---

## Aprendizado de Preferências

Após múltiplas correções realizadas pelo usuário, o agente poderá adaptar automaticamente futuras classificações.

Exemplo:

```text
Mercado

↓

Alimentação
```

Após sucessivas correções, novos lançamentos semelhantes poderão ser classificados automaticamente.

---

## Memória Compartilhada

Na arquitetura baseada em MCP, a memória poderá ser compartilhada entre diferentes ferramentas especializadas.

Isso permitirá que componentes distintos utilizem um mesmo contexto conversacional e financeiro, preservando consistência durante toda a interação.

---

# Dependências

Este documento relaciona-se com:

- `decision-pipeline.md`
- `parser.md`
- `categorization.md`
- `recurring.md`
- `goals.md`
