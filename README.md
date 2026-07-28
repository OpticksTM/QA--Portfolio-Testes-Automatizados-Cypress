# Portfólio de Automação de Testes - Cypress (SauceDemo)

Este repositório faz parte do meu portfólio profissional de Quality Assurance (QA), focado em Testes Automatizados de Ponta a Ponta (E2E) utilizando Cypress e JavaScript. O objetivo é demonstrar competência técnica na criação de scripts de teste para validação de fluxos críticos em aplicações web, aplicando o padrão Page Object Model (POM) e a metodologia BDD (Behavior-Driven Development).

---

## Ciclo de Vida e Processo de Qualidade
Antes da implementação do código, o projeto passou por etapas analíticas essenciais:
1. **Análise de Requisitos:** Mapeamento das regras de negócio e funcionalidades principais do sistema.
2. **Modelagem BDD:** Escrita prévia de cenários focados na experiência do usuário (documentados no arquivo `BDD_CENARIOS.md`).
3. **Planejamento de Testes:** Cobertura de caminhos funcionais positivos e cenários negativos (validação de erros e exceções).
4. **Automação:** Desenvolvimento dos scripts de teste utilizando Cypress.

---

## Tecnologias Utilizadas
- JavaScript (Linguagem de programação)
- Cypress (Framework de automação E2E)
- Node.js (Ambiente de execução)
- Git e GitHub (Controle de versão e portfólio)

---

## Escopo Atual da Automação
O projeto cobre fluxos fundamentais de autenticação e compra na aplicação de testes SauceDemo. 

Cenários implementados:
1. **Autenticação com Credenciais Válidas (`login.cy.js`):** Validação do preenchimento dos campos de usuário e senha, acionamento do botão de acesso, verificação do redirecionamento para a página de inventário e checagem do título visual da página (*Products*).
2. **Fluxo Completo de Compra / Checkout (`checkout.cy.js`):** Validação da adição de produto ao carrinho, checagem dos itens, preenchimento automatizado das informações do comprador (Nome, Sobrenome e CEP), finalização do pedido e validação da mensagem de sucesso (*"Thank you for your order!"*).

---

## Conexão com Testes Manuais
Para visualizar o planejamento detalhado, casos de teste funcionais e a gestão de cenários estruturados para este mesmo sistema, acesse o meu repositório dedicado a [Testes Manuais](COLOQUE_O_LINK_DO_SEU_OUTRO_REPO_AQUI).

---

## Como Executar o Projeto

Siga os passos abaixo para baixar e rodar os testes automatizados no seu ambiente local:

1. **Pré-requisitos:** Certifique-se de ter o Node.js instalado na máquina.
2. **Clone o repositório:**
   ```bash
   git clone [https://github.com/OpticksTM/QA--Portfolio-Testes-Automatizados-Cypress.git](https://github.com/OpticksTM/QA--Portfolio-Testes-Automatizados-Cypress.git)