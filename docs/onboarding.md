# Onboarding — Dev Júnior

Bem-vindo à Turmalina. Leia isto antes de abrir o primeiro PR.

## Seu cargo

**Desenvolvedor Júnior** · reporta ao Rafael (CEO / Tech Lead) · mentoria técnica com o Thiago (Dev Sênior).

### Suas responsabilidades

- Resolver os tickets que forem atribuídos a você, dentro do prazo combinado.
- Investigar antes de perguntar — mas **não ficar travado em silêncio**. Regra da casa: travou por mais de 2 horas sem progresso, chama alguém.
- Abrir PRs pequenos, bem descritos e testados.
- Avisar cedo quando um prazo estiver em risco.
- Participar da daily, do planejamento da sprint e da retrospectiva.
- Aos poucos, assumir o frontend da Página de Matrícula e partes do Painel da Escola.

### O que esperamos nos primeiros 90 dias

| Período | Expectativa |
|---|---|
| Semanas 1–2 | Entregar correções de HTML/CSS/JS com autonomia. Dominar nosso fluxo de Git/PR. |
| Semanas 3–6 | Consumir a API, trabalhar em componentes React no Painel. Escrever testes básicos. |
| Semanas 7–12 | Entregar uma funcionalidade pequena de ponta a ponta (front + endpoint + banco). |

## Fluxo de trabalho

### Git

- `main` é a branch de produção. **Ninguém faz commit direto na `main`.**
- Toda tarefa nasce em uma branch própria a partir da `main` atualizada:
  - `fix/TUR-123-descricao-curta` para correção de bug
  - `feat/TUR-123-descricao-curta` para funcionalidade nova
  - `chore/TUR-123-descricao-curta` para manutenção, configuração, docs
- Commits seguem o padrão **Conventional Commits**, em português:
  - `fix: corrige cálculo de desconto na matrícula`
  - `feat: adiciona filtro por turno na lista de alunos`
  - `refactor: extrai validação do formulário para função própria`
  - Um commit = uma mudança com sentido. Nada de `ajustes`, `teste`, `agora vai`.

> **Conventional Commits** é uma convenção de mensagem de commit (`tipo: descrição`). Ajuda a ler o histórico e a gerar changelog automático.

### Pull Requests

- Use o template em `.github/pull_request_template.md`.
- Mudança visual **sempre** com print de antes e depois.
- Explique **a causa** do problema, não só o que você mudou.
- PR pequeno é PR revisado rápido. PR de 800 linhas fica uma semana parado.
- Para pedir revisão, mande o link do PR (ou o diff) com `/review`.

### Definição de pronto (DoD)

Um ticket só está **pronto** quando:

1. Atende a todos os critérios de aceitação.
2. Foi testado manualmente nos cenários do ticket.
3. Não quebrou nada que funcionava antes.
4. O PR foi aprovado.
5. Foi feito o merge na `main`.

## Como rodar a Página de Matrícula

Não precisa de build. Duas opções:

```bash
npx serve apps/matricula-publica
```

Ou abra `apps/matricula-publica/index.html` com a extensão **Live Server** do VS Code.

Para testar no celular: use o **modo dispositivo do DevTools** (Ctrl+Shift+M no Chrome) e, se possível, teste também no seu celular de verdade, acessando o IP da sua máquina na mesma rede.

## Canais (simulados)

- `#dev` — dúvidas técnicas, avisos de deploy.
- `#suporte` — onde o Marcos posta bugs vindos dos clientes.
- `#geral` — o resto.

## Comandos do ambiente

Ver `README.md`.
