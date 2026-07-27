# Portfólio de Automação de Testes - Cypress (SauceDemo)

Este repositório faz parte do meu portfólio profissional de Quality Assurance (QA), focado em Testes Automatizados de Ponta a Ponta (E2E) utilizando Cypress e JavaScript. O objetivo é demonstrar competência técnica na criação de scripts de teste para validação de fluxos críticos em aplicações web.

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

## Como Executar o Projeto

Siga os passos abaixo para baixar e rodar os testes automatizados no seu ambiente local:

1. **Pré-requisitos:** Certifique-se de ter o Node.js instalado na máquina.
2. **Clone o repositório:**
   ```bash
   git clone [https://github.com/OpticksTM/QA--Portfolio-Testes-Automatizados-Cypress.git](https://github.com/OpticksTM/QA--Portfolio-Testes-Automatizados-Cypress.git)
