# Parser

**Documento:** AI-005  
**Versão:** 1.0  
**Última atualização:** 05/07/2026  
**Status:** ⚠️ Parcialmente Implementado

---

# Objetivo

O Parser é responsável por transformar mensagens em linguagem natural em informações estruturadas utilizadas pelas próximas etapas do pipeline.

Sua função é identificar os dados presentes na mensagem do usuário e organizá-los para validação e execução.

O Parser não executa operações financeiras nem aplica regras de negócio.

---

# Responsabilidades

O Parser é responsável por:

- identificar informações relevantes na mensagem;
- extrair valores monetários;
- identificar descrições da transação;
- encaminhar informações para os módulos responsáveis pela categorização e execução.

---

# Fluxo

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
Dados Estruturados
        │
        ▼
Validation Layer
```

---

# Informações extraídas

## Valor

Quando informado pelo usuário, o valor monetário é identificado e estruturado.

### Exemplos

> Recebi 2500 salário

↓

```json
{
  "value": 2500
}
```

---

> Gastei 35 no almoço

↓

```json
{
  "value": 35
}
```

### Status

✅ Implementado

---

## Descrição

O Parser identifica a descrição informada pelo usuário para representar a operação.

### Exemplo

> Gastei 35 no almoço

↓

```json
{
  "description": "almoço"
}
```

### Status

✅ Implementado

---

## Categoria

O Parser não é responsável pela classificação financeira da transação.

Ele apenas encaminha as informações necessárias para o módulo de categorização.

A lógica de categorização está documentada em `categorization.md`.

### Status

⚠️ Parcialmente Implementado

Durante os testes observou-se que algumas transações recebem uma categoria inicial automaticamente, enquanto outras permanecem associadas a categorias literais e exigem correção manual.

---

## Metas

Quando a mensagem faz referência a uma meta financeira, essa informação é encaminhada para processamento.

A resolução dessa referência será documentada em `goals.md`.

### Status

🚧 Pendente de validação

---

# Limitações conhecidas

## Operações sem valor

Mensagens como:

> Recebi meu salário

não produzem comportamento consistente.

O sistema atual não solicita automaticamente o valor necessário para concluir o registro.

Em alguns casos ocorre um fallback genérico.

---

## Referências temporais

Atualmente o Parser não interpreta referências temporais presentes na mensagem.

Expressões como:

- hoje
- amanhã
- ontem
- semana que vem
- próximo mês

não alteram a data da operação.

### Exemplo observado

Usuário:

> Vou receber 50 de bônus amanhã.

Comportamento observado:

O agente interpreta a operação como imediata e ignora a referência temporal.

---

## Dependência do modelo

Grande parte da extração ainda depende da interpretação realizada pelo modelo de linguagem.

Ainda não existe uma camada totalmente determinística de parsing.

---

## Extração parcial

Mesmo quando a intenção é identificada corretamente, nem sempre todas as informações necessárias são extraídas para permitir a execução da operação.

---

# Fora do escopo

O Parser não é responsável por:

- validar informações obrigatórias;
- solicitar dados ao usuário;
- decidir se uma operação será executada;
- acessar banco de dados;
- registrar receitas ou despesas;
- atualizar categorias;
- gerar respostas conversacionais.

Essas responsabilidades pertencem às etapas seguintes do pipeline.

---

# Planejamento

As seguintes evoluções fazem parte da arquitetura planejada do Grana.ai:

- parser determinístico para operações financeiras;
- interpretação de referências temporais;
- padronização da estrutura de saída;
- redução da dependência do modelo de linguagem;
- integração direta com o Decision Pipeline;
- integração com ferramentas MCP.

---

# Dependências

Este documento está relacionado aos seguintes documentos:

- `system.md`
- `intents.md`
- `decision-pipeline.md`
- `categorization.md`
- `goals.md`
