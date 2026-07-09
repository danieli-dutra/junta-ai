# Alvos de Implementação

**Documento:** TECH-001  
**Versão:** 1.0  
**Última atualização:** 08/07/2026  
**Status:** 🚧 Planejamento

---

# Objetivo

Este documento registra as capacidades funcionais identificadas durante a implementação e auditoria do agente financeiro.

Seu objetivo é servir como referência para a próxima evolução arquitetural do Grana.ai, auxiliando na implementação do backend, das ferramentas especializadas e da futura arquitetura baseada em MCP.

Este documento **não define como essas funcionalidades deverão ser implementadas**, apenas descreve quais capacidades o sistema deverá disponibilizar.

---

# Organização

As funcionalidades estão divididas em três grupos:

- Capacidades implementadas
- Capacidades parcialmente implementadas
- Capacidades planejadas

Sempre que possível, cada capacidade está relacionada ao documento funcional correspondente.

---

# 1. Registro de Transações

| Capacidade | Status | Documento |
|------------|:------:|-----------|
| Registrar receitas | ✅ | parser.md |
| Registrar despesas | ✅ | parser.md |
| Atualizar categorias | ✅ | categorization.md |
| Corrigir categorias | ✅ | categorization.md |
| Atualizar dashboard automaticamente | ✅ | health-score.md |
| Atualizar indicadores financeiros | ✅ | health-score.md |
| Exclusão de lançamentos | 🚧 | Planejamento |
| Edição completa de lançamentos | 🚧 | Planejamento |

---

## Possíveis capacidades futuras

Exemplos de operações esperadas:

- criar transação;
- atualizar transação;
- excluir transação;
- consultar transações;
- listar transações por período.

---

# 2. Categorização

| Capacidade | Status |
|------------|:------:|
| Categorização automática | ✅ |
| Correção manual | ✅ |
| Alias conhecidos | ✅ |
| Confirmação quando houver baixa confiança | ✅ |
| Aprendizado automático | 🚧 |

---

## Possíveis capacidades futuras

- sugerir categorias;
- aprender preferências do usuário;
- criar categorias personalizadas;
- histórico de correções.

---

# 3. Metas

| Capacidade | Status |
|------------|:------:|
| Registrar contribuição | ✅ |
| Corrigir contribuição | ✅ |
| Calcular progresso | ✅ |
| Relacionar receitas às metas | ✅ |
| Criar metas | ✅ |
| Editar metas | 🚧 |
| Excluir metas | 🚧 |
| Listar metas | 🚧 |

---

## Possíveis capacidades futuras

- consultar metas;
- histórico de contribuições;
- previsão de conclusão;
- priorização entre metas.

---

# 4. Recorrências

| Capacidade | Status |
|------------|:------:|
| Detectar recorrência | ✅ |
| Solicitar confirmação | ✅ |
| Criar recorrência | ✅ |
| Editar recorrência | 🚧 |
| Excluir recorrência | 🚧 |
| Executar automaticamente | 🚧 |

---

# 5. Saúde Financeira

| Capacidade | Status |
|------------|:------:|
| Health Score | ✅ |
| Situação Financeira | ✅ |
| Análise de Gastos | ✅ |
| Insights Financeiros | ✅ |
| Explicação do Score | 🚧 |
| Histórico do Score | 🚧 |
| Tendências Financeiras | 🚧 |

---

# 6. Memória

| Capacidade | Status |
|------------|:------:|
| Contexto conversacional | ✅ |
| Operações pendentes | ✅ |
| Correções em múltiplas etapas | ✅ |
| Memória persistente | 🚧 |
| Preferências do usuário | 🚧 |
| Aprendizado contínuo | 🚧 |

---

# 7. Parser

| Capacidade | Status |
|------------|:------:|
| Extração de valor | ✅ |
| Extração de categoria | ✅ |
| Extração de descrição | ✅ |
| Extração de metas | ✅ |
| Datas relativas | 🚧 |
| Múltiplas intenções | 🚧 |
| Intervalos de datas | 🚧 |

---

# 8. Ferramentas Lógicas

Durante a implementação do primeiro agente foram identificadas capacidades que poderão futuramente ser distribuídas entre ferramentas especializadas.

A nomenclatura abaixo representa apenas sugestões funcionais e **não define a arquitetura final**.

| Capacidade | Possível ferramenta |
|------------|---------------------|
| Registrar transação | createTransaction |
| Atualizar categoria | updateTransactionCategory |
| Consultar dashboard | getDashboard |
| Consultar Health Score | getHealthScore |
| Consultar situação financeira | getFinancialSituation |
| Consultar análise de gastos | getSpendingAnalysis |
| Criar meta | createGoal |
| Atualizar meta | updateGoal |
| Registrar contribuição | addGoalContribution |
| Consultar metas | listGoals |
| Criar recorrência | createRecurring |
| Atualizar recorrência | updateRecurring |
| Consultar recorrências | listRecurring |

A implementação poderá utilizar nomes, agrupamentos ou responsabilidades diferentes.

---

# Próximos Objetivos

A próxima evolução do agente deverá priorizar:

1. Exclusão de lançamentos.
2. Datas relativas ("hoje", "ontem", "amanhã").
3. Múltiplas intenções em uma mesma mensagem.
4. Memória financeira persistente.
5. Explicabilidade do Health Score.
6. Gerenciamento completo de metas.
7. Gerenciamento completo de recorrências.
8. Aprendizado de categorização.

---

# Relação com a Documentação

Este documento complementa a documentação funcional presente em `docs/ai`.

Enquanto os documentos da pasta **AI** descrevem **como o agente se comporta**, este documento resume **quais capacidades deverão estar disponíveis para sustentar esse comportamento** na próxima evolução do sistema.

A definição da arquitetura responsável por implementar essas capacidades será documentada separadamente.
