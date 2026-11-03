# Turmalina — documento da empresa

> Última atualização: 03/11/2026 · Responsável: Rafael Moura (CEO)

## Em uma frase

**A Turmalina é um SaaS que ajuda escolas de cursos livres (idiomas, informática, cursos profissionalizantes) a matricular, cobrar e, principalmente, não perder alunos.**

## História

Em 2024, a Camila Duarte era coordenadora pedagógica de uma rede de escolas de idiomas em Campinas. Ela via todo semestre a mesma coisa: **cerca de 35% dos alunos abandonavam o curso antes do fim**, e ninguém percebia a tempo. Os sinais estavam lá — faltas seguidas, boleto atrasado, nota caindo —, mas estavam espalhados entre planilhas, caderno de chamada e grupos de WhatsApp.

Eu (Rafael) era dev em uma fintech e já tinha montado dois projetos paralelos que não deram em nada. A Camila me mostrou as planilhas dela e eu montei um protótipo feio, em um fim de semana, que cruzava frequência com pagamentos e mandava um alerta. Ela testou em duas escolas e a coordenação de uma delas recuperou 11 alunos em um mês.

Fundamos a Turmalina em **setembro de 2025**. O MVP foi feito correndo — eu no backend, e um freelancer fez a página pública de matrícula. Em **março de 2026** levantamos **R$ 1,5 milhão de pré-seed** com um grupo de investidores-anjo.

O nome: *turma* + *turmalina* (uma pedra brasileira). A gente cuida de turmas.

## Propósito

Nenhum aluno deveria desistir de estudar porque ninguém percebeu que ele estava com dificuldade.

## Problema que resolvemos

Escolas de cursos livres no Brasil são, em sua maioria, negócios pequenos (50 a 1.500 alunos) que:

- Gerenciam matrículas, turmas e frequência em **planilhas e cadernos**.
- Cobram por **boleto/Pix manual**, com muita inadimplência.
- Se comunicam com alunos por **WhatsApp pessoal** da secretaria.
- **Só descobrem que perderam o aluno quando ele já foi embora.**

Evasão é o maior custo invisível dessas escolas: conquistar um aluno novo custa de 5 a 7 vezes mais do que manter um atual.

## Público-alvo

- **Cliente (quem paga):** donos e coordenadores de escolas de cursos livres com 50 a 1.500 alunos.
- **Usuários diários:** secretaria, coordenação pedagógica e professores.
- **Usuário final:** o aluno (página de matrícula, portal do aluno, mensagens).

Perfil típico do cliente: dono(a) de escola, 35–55 anos, pouco técnico, usa muito o celular, odeia sistema complicado.

## Modelo de negócio

SaaS B2B com assinatura mensal por escola:

| Plano | Preço/mês | Para quem |
|---|---|---|
| Essencial | R$ 299 | Até 150 alunos. Matrículas, turmas, frequência, cobrança. |
| Pro | R$ 649 | Até 600 alunos. + Radar de Evasão (IA) + WhatsApp integrado. |
| Rede | a partir de R$ 1.490 | Várias unidades, relatórios consolidados. |

Receita complementar: **taxa de 0,9%** sobre cobranças processadas pela plataforma (Pix/boleto via Asaas).

## Produtos

1. **Painel da Escola** (produto principal) — web app para secretaria e coordenação: alunos, turmas, chamada, financeiro, comunicação.
2. **Página Pública de Matrícula** — link que a escola coloca no Instagram/site para captar pré-matrículas. *Legado do MVP.*
3. **Radar de Evasão (beta)** — modelo de IA que dá um "score de risco" para cada aluno e sugere uma mensagem de reengajamento para a coordenação enviar.
4. **Cobrança integrada** — geração de Pix/boleto recorrente, conciliação automática por webhook.
5. **App do Professor (PWA)** — chamada pelo celular. Simples, mas é o que mais gera dado para o Radar.

## Equipe

| Pessoa | Cargo | O que faz | Como é trabalhar com ela |
|---|---|---|---|
| **Rafael Moura** | CEO e Tech Lead | Estratégia, investidores, arquitetura, prioriza o backlog técnico. **Seu chefe direto.** | Direto, cobra prazo e qualidade. Prefere que você avise de um problema cedo do que tarde. |
| **Camila Duarte** | Cofundadora · COO e Produto | Fala com escolas, define o que construir, escreve as specs. | Conhece o cliente melhor que ninguém. Vai perguntar "e o usuário entende isso?". |
| **Thiago Nunes** | Dev Sênior | Backend, infraestrutura, serviço de IA. Seu mentor (`/senior`). | Ocupado, mas generoso. Odeia "não funciona" sem contexto. |
| **Diego Ramos** | Dev Pleno full-stack | Painel da Escola, integrações (Asaas, WhatsApp). | Rápido, mas documenta pouco — boa parte do sistema só existe na cabeça dele. |
| **Bia Okada** | Product Designer (meio período) | Figma, design system, testes com usuário. | Detalhista. Vai notar se o espaçamento estiver 4px errado. |
| **Marcos Vieira** | Customer Success e Suporte | Implantação de escolas, atendimento, primeiro filtro de bugs. | Ponte com o cliente. Os bugs chegam por ele. |
| **Letícia Prado** | Vendas | Demonstrações e fechamento de escolas novas. | Vai pedir funcionalidade "pra ontem" porque um cliente pediu na demo. |
| **Você** | Desenvolvedor Júnior | Ver `docs/onboarding.md`. | — |

## Tecnologias

| Camada | Stack |
|---|---|
| Painel da Escola | React 18 + TypeScript + Vite, TanStack Query, React Hook Form + Zod, Tailwind CSS |
| Página de Matrícula | HTML + CSS + JavaScript puro (legado do MVP — migração planejada) |
| API | Node.js 20 + Express + TypeScript, Prisma ORM |
| Banco de dados | PostgreSQL 16 (Neon) |
| Filas e jobs | Redis + BullMQ (envio de mensagens, cobranças recorrentes) |
| IA | Serviço em Python (FastAPI + scikit-learn) para o score de risco; API da Anthropic (Claude) para gerar mensagens de reengajamento |
| Integrações | Asaas (Pix/boleto), WhatsApp Business Cloud API (Meta), Resend (e-mail) |
| Infra | Vercel (front), Render (API e workers), Sentry (erros), GitHub Actions (CI) |
| Ferramentas | GitHub, Linear (tickets), Slack, Figma, Notion |

> Neste repositório os tickets ficam em `docs/tickets/` (espelho do Linear).

## Situação atual (novembro de 2026)

**Números**

- **52 escolas pagantes**, ~9.800 alunos ativos na plataforma.
- **MRR:** R$ 34,6 mil (MRR = receita recorrente mensal).
- **Churn de logos:** 5,1% ao mês — alto demais. Meta: abaixo de 2%.
- **Queima de caixa (burn):** R$ 118 mil/mês. **Caixa:** R$ 1,08 milhão → **runway de ~9 meses.**
- 71% dos acessos à página de matrícula vêm do celular.

**O que está pegando fogo**

1. **Página de matrícula quebrada no celular.** Escolas em plena campanha de matrícula do 1º semestre 2027 estão perdendo alunos. *(é aqui que você entra)*
2. **Radar de Evasão gera falsos positivos.** Coordenadores receberam alerta de "alto risco" para alunos que estão ótimos e começaram a ignorar o recurso — e ele é o principal motivo de venda do plano Pro.
3. **Webhook do Asaas às vezes processa o mesmo pagamento duas vezes.** Aluno aparece com crédito errado ou como inadimplente. Gera ticket de suporte toda semana.
4. **Painel lento para escolas grandes.** A tela de turmas leva ~9 segundos para escolas com mais de 1.000 alunos.
5. **Dívida técnica:** quase zero testes no frontend, ~20% de cobertura no backend, conhecimento concentrado no Diego.
6. **Implantação demora 2 semanas** porque a importação da planilha da escola é feita manualmente pelo Marcos.

## Objetivos para os próximos 6 meses (até maio de 2027)

| # | Objetivo | Meta |
|---|---|---|
| 1 | Crescer receita para captar a rodada Seed | MRR de R$ 34,6 mil → **R$ 80 mil** |
| 2 | Parar de perder clientes | Churn de 5,1% → **abaixo de 2%** ao mês |
| 3 | Fazer o Radar de Evasão ser confiável | Precisão do alerta de "alto risco" acima de **70%** |
| 4 | Implantação self-service | Escola nova operando em **até 2 dias**, com importação automática de planilha |
| 5 | Qualidade e estabilidade | CI com testes obrigatórios; zero incidentes de cobrança duplicada |
| 6 | Página de matrícula nova | Migrar para React, com conversão mobile acima de **6%** (hoje: 1,8%) |
