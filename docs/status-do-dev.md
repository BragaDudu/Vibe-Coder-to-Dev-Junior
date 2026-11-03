# Status do Dev Júnior

> Arquivo de acompanhamento mantido pelo Rafael (CEO / Tech Lead). Atualizado a cada tarefa, review, daily e retrospectiva.

## Perfil

- **Cargo:** Desenvolvedor Júnior
- **Início:** terça, 03/11/2026
- **Mentor:** Thiago Nunes (Dev Sênior)
- **Nível atual das tarefas:** 1 — HTML/CSS/JS e fluxo de Git/PR

## Quadro de tarefas

| Ticket | Título | Prioridade | Prazo | Status |
|---|---|---|---|---|
| [TUR-147](tickets/TUR-147.md) | Página de matrícula quebrada no celular | 🔴 Alta | 05/11/2026 | Em revisão — [PR #1](https://github.com/BragaDudu/Vibe-Coder-to-Dev-Junior/pull/1): alterações solicitadas na descrição |

## Backlog conhecido (pode cair para você no futuro)

- TUR-152 — Integrar a página de matrícula com a API pública (buscar cursos e enviar pré-matrícula).
- TUR-139 — Webhook do Asaas processando pagamento duplicado.
- TUR-131 — Tela de turmas lenta para escolas grandes.
- TUR-160 — Falsos positivos no Radar de Evasão.

## Histórico de avaliações

| Data | Ticket | Funcionamento | Organização | Legibilidade | Boas práticas | Resolução | Investigação | Independência | Comunicação | Resultado |
|---|---|---|---|---|---|---|---|---|---|---|
| 03/11/2026 | TUR-147 (review 1) | 5 | n/a* | n/a* | n/a* | 4 | 2 | 2 | 2 | 🟡 Alterações solicitadas |

> Escala: 1 (insuficiente) a 5 (excelente).
> \* Código implementado pela IA a pedido do dev — organização, legibilidade e boas práticas não refletem o trabalho dele.

## Pontos fortes observados

- Persistência: resolveu o setup de Git até o fim, mesmo errando no caminho.
- Manda o erro completo quando trava (boa comunicação de bloqueio).
- Validou o resultado visualmente e percebeu quando algo não estava certo (duas colunas abaixo de 1200px, código antigo em cache).

## Lacunas a desenvolver

- Explicar a causa raiz de um problema (PR citou só o `box-sizing`).
- Escrita técnica: "Como testar" vago, descrição incompleta, texto copiado da conversa.
- Fluxo de Git: criar branch antes de trabalhar; `git status` antes de `push`/`checkout`.
- Independência: delegou a implementação inteira para a IA no primeiro ticket.

## Diário

- **03/11/2026** — Primeiro dia. Onboarding feito. Recebeu a TUR-147.
- **03/11/2026** — Setup de Git feito (criou a `main` e trocou a branch padrão). Na TUR-147, pediu para a IA implementar a correção de layout (uma coluna < 1200px, duas ≥ 1200px, border-box). Critério do zoom no iOS ainda em aberto.
- **03/11/2026** — A pedido do dev, a IA também deixou o formulário em uma coluna abaixo de 1200px, corrigiu o zoom no iOS (fonte 16px) e o label do WhatsApp. Próximo passo: PR com prints e explicação da causa.
- **03/11/2026** — Abriu o PR #1. Review 1: código aprovado no funcionamento, mas descrição do PR com alterações solicitadas (causa incompleta, sem justificativa do breakpoint, como testar vago, tabela de prints quebrada, checklist marcado sem conferir). Enviadas 4 perguntas de verificação de entendimento.
