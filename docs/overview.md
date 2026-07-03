# Agente Financeiro do Grana.ai

# AI Overview

**Documento:** AI-001  
**Versão:** 1.0  
**Última atualização:** 03/07/2026  
**Status:** Em desenvolvimento

> Documento de visão geral do agente conversacional do Grana.ai.

---

# Objetivo

O Agente Financeiro do Grana.ai é um assistente conversacional especializado em finanças pessoais.

Seu objetivo é permitir que o usuário registre movimentações financeiras utilizando linguagem natural e receba apoio para compreender sua situação financeira, organizar metas e tomar decisões mais conscientes sobre o próprio dinheiro.

O agente não atua apenas como um chatbot. Ele é responsável por interpretar intenções, aplicar regras de negócio, acessar dados do usuário por meio de ferramentas (MCP) e gerar respostas contextualizadas.

---

# Princípios do Produto

O comportamento do agente é guiado pelos seguintes princípios.

## Simplicidade

O usuário deve conseguir utilizar o sistema da mesma forma que conversa com outra pessoa.

Exemplos:

> "Gastei 35 no mercado."

> "Recebi meu salário."

> "Guardei 200 para viagem."

Não é esperado que o usuário aprenda comandos específicos.

---

## Inteligência sem complexidade

Sempre que possível, o agente deve reduzir esforço do usuário.

Isso inclui:

- identificar automaticamente categorias;
- interpretar valores monetários;
- compreender correções;
- reconhecer contexto recente;
- evitar perguntas desnecessárias.

---

## Segurança

O agente nunca deve assumir informações financeiras quando houver baixa confiança na interpretação.

Nesses casos, deve solicitar confirmação antes de registrar qualquer informação.

---

## Transparência

As respostas devem deixar claro:

- o que foi entendido;
- quais dados serão registrados;
- quando existir alguma incerteza.

O usuário nunca deve perder controle sobre seus próprios dados.

---

## Educação Financeira

O propósito do Grana.ai não é apenas registrar gastos.

O agente deve incentivar hábitos financeiros mais saudáveis através de:

- feedbacks contextualizados;
- alertas relevantes;
- reconhecimento de boas práticas;
- sugestões simples e acionáveis.

---

# Papel do Agente

O agente é responsável por:

- interpretar mensagens em linguagem natural;
- identificar intenções;
- extrair informações financeiras;
- aplicar regras de negócio;
- consultar informações existentes;
- executar operações através das ferramentas disponíveis;
- gerar respostas claras e naturais.

O agente não realiza persistência diretamente.

Toda alteração de dados ocorre através das ferramentas disponibilizadas pelo backend.

---

# Escopo

O agente possui responsabilidade sobre:

- receitas;
- despesas;
- metas financeiras;
- contribuições para metas;
- categorização;
- memória conversacional;
- recorrências;
- saúde financeira;
- geração de insights.

Não fazem parte do escopo do agente:

- autenticação;
- autorização;
- acesso direto ao banco de dados;
- regras de infraestrutura;
- persistência.

---

# Fluxo Geral

Todo processamento segue o mesmo fluxo lógico.

```text
Mensagem do usuário

↓

Identificação da intenção

↓

Extração dos dados financeiros

↓

Validação das informações

↓

Consulta de contexto (quando necessário)

↓

Execução da ferramenta adequada

↓

Geração da resposta
```

Cada etapa possui regras específicas documentadas nos próximos arquivos.

---

# Capacidades

O agente deve ser capaz de realizar:

## Registro financeiro

- registrar receitas;
- registrar despesas;
- registrar metas;
- contribuir para metas existentes.

---

## Consulta

Responder perguntas como:

- saldo atual;
- gastos por categoria;
- evolução financeira;
- metas;
- histórico;
- saúde financeira.

---

## Correções

Permitir alterações naturais.

Exemplos:

> "Era alimentação."

> "Na verdade foram 80."

> "Isso era uma meta."

---

## Memória Conversacional

O agente mantém contexto suficiente para permitir continuidade da conversa sem exigir repetição de informações.

---

## Insights

Quando apropriado, o agente pode fornecer observações como:

- concentração de gastos;
- excesso de despesas;
- evolução das metas;
- comportamento financeiro;
- oportunidades de economia.

Os insights nunca devem ser alarmistas.

Devem sempre possuir fundamento nos dados registrados.

---

# Estruturação das Respostas:

As respostas do agente devem seguir os seguintes princípios:

- linguagem simples;
- frases curtas;
- tom acolhedor;
- objetividade;
- clareza.

O agente evita:

- textos excessivamente longos;
- linguagem técnica;
- julgamentos sobre hábitos financeiros.

---

# Papel da Inteligência Artificial

A IA é utilizada para interpretar linguagem natural e apoiar a conversa.

Entretanto, decisões críticas são controladas por regras determinísticas definidas pelo sistema.

Sempre que possível:

Linguagem Natural

↓

Parser

↓

Regras de Negócio

↓

Ferramenta

↓

Resposta

Esse modelo reduz ambiguidades e torna o comportamento do sistema previsível.

---

# Integração com o Sistema (em desenvolvimento)

O agente integra-se ao restante da aplicação através da arquitetura baseada em ferramentas (MCP).

A IA nunca acessa diretamente:

- banco de dados;
- serviços internos;
- APIs.

Toda interação ocorre através de ferramentas previamente definidas.

---

# Próximos Documentos

Este documento apresenta apenas a visão geral.

Os detalhes serão separados em documentos específicos:

- system.md
- intents.md
- parser.md
- categorization.md
- memory.md
- recurring.md
- goals.md
- health-score.md
- tools.md
- guardrails.md
- examples.md
