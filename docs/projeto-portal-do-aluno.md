# Projeto de desenvolvimento — Portal do Aluno (mini)

> Projeto pessoal de estudo do Dev Júnior, combinado com o Rafael em 04/11/2026.
> **Não substitui os tickets da sprint.** É feito no tempo de estudo, em repositório próprio.

## Por que este projeto

A Turmalina ainda não tem **Portal do Aluno**, e ele está no roadmap do 1º trimestre de 2027. O aluno não tem onde ver a própria frequência, e é justamente a frequência que mais pesa no Radar de Evasão.

Se o seu projeto ficar bom, ele vira referência (ou ponto de partida) para o portal de verdade.

## O produto, em uma frase

Professores registram aulas e fazem a chamada; alunos fazem login e acompanham as próprias turmas e a frequência, com um alerta quando ficam abaixo de 75%.

## Stack (a mesma da empresa)

| Camada | Tecnologia |
|---|---|
| Backend | Node.js 20 + Express + TypeScript |
| Banco | PostgreSQL (rodando local com Docker) + Prisma ORM |
| Autenticação | JWT (`jsonwebtoken`) + senha com hash (`bcrypt`) |
| Validação | Zod |
| Frontend | React + Vite (TypeScript quando se sentir seguro) |
| Testes | Vitest + Supertest |
| Deploy | Render (API) + Neon (banco) + Vercel (front) |

## Entidades

- **Usuario**: id, nome, email (único), senhaHash, papel (`ALUNO` ou `PROFESSOR`), criadoEm
- **Turma**: id, nome, curso, professorId
- **Matricula**: alunoId, turmaId (um aluno não pode ser matriculado duas vezes na mesma turma)
- **Aula**: id, turmaId, data, tema
- **Presenca**: aulaId, alunoId, presente (sim/não)

## Endpoints mínimos

| Método | Rota | Quem pode | O que faz |
|---|---|---|---|
| POST | `/auth/register` | público | Cria usuário |
| POST | `/auth/login` | público | Devolve o JWT |
| GET | `/me` | logado | Dados do usuário do token |
| GET | `/turmas` | logado | Professor: as turmas dele. Aluno: as turmas em que está matriculado |
| POST | `/turmas` | professor | Cria turma |
| POST | `/turmas/:id/alunos` | professor dono da turma | Matricula um aluno pelo e-mail |
| POST | `/turmas/:id/aulas` | professor dono da turma | Registra uma aula |
| GET | `/turmas/:id/aulas` | professor dono ou aluno matriculado | Lista as aulas |
| PUT | `/aulas/:id/presencas` | professor dono da turma | Faz a chamada |
| GET | `/me/frequencia` | aluno | % de presença por turma + alerta abaixo de 75% |

## Requisitos de segurança (não negociáveis)

- Senha nunca salva em texto puro.
- Segredo do JWT em variável de ambiente (`.env` fora do Git).
- Token com expiração.
- **Autenticação ≠ autorização:** estar logado não dá acesso a tudo. Aluno não pode ver turma em que não está matriculado; professor não pode fazer chamada na turma de outro professor.
- Respostas de erro com o status HTTP correto (400, 401, 403, 404, 409).

## Fases

| Fase | Entrega | Pronto quando |
|---|---|---|
| 1 — Base e login | API com Express + Prisma + Postgres, cadastro, login e `/me` com JWT | Dá para cadastrar, logar e chamar `/me` com o token pelo Insomnia/Thunder Client; sem token retorna 401 |
| 2 — Domínio | Turmas, matrículas, aulas e presença com as regras de permissão | Todos os endpoints da tabela funcionam e respeitam quem pode o quê |
| 3 — Frontend | Telas de login, turmas do professor (com chamada) e painel do aluno | Rotas protegidas; logout; token expirado leva de volta ao login |
| 4 — Qualidade e deploy | Testes dos fluxos principais, README, deploy | Rodando na internet, com link no README e testes passando |
| 5 — Bônus IA | Mensagem de incentivo gerada por IA para aluno com frequência baixa | Chamada à API da Anthropic feita pelo backend, nunca pelo front |

## Regras do combinado

- Repositório próprio no GitHub, desde o primeiro commit.
- Mesmo padrão da empresa: branch por funcionalidade, Conventional Commits, PR com o template.
- Cada fase termina com um PR que passa por `/review`.
- IA para **entender e destravar**, não para escrever a fase inteira. Travou: `/senior`.
- Prioridade é sempre o ticket da sprint.
