# Modelagem de Cenários (BDD) - SauceDemo

Este documento demonstra a modelagem de cenários de teste funcionais utilizando a abordagem BDD (Behavior-Driven Development) para os fluxos automatizados do sistema SauceDemo.

## Funcionalidade: Autenticação de Usuário
Como um usuário cadastrado no SauceDemo
Quero poder fazer login no sistema
Para acessar a página de inventário de produtos

### Cenário 1: Login com credenciais válidas
- **Dado** que estou na página de login do SauceDemo
- **Quando** preencho o campo de usuário com "standard_user"
- **E** preencho o campo de senha com "secret_sauce"
- **E** clico no botão de login
- **Então** devo ser redirecionado para a página de inventário ("/inventory.html")
- **E** devo visualizar o título "Products" na tela

---

## Funcionalidade: Fluxo de Checkout (Compra Completa)
Como um cliente logado na loja
Quero adicionar um produto ao carrinho e finalizar a compra
Para garantir que o fluxo de ponta a ponta (E2E) funcione corretamente

### Cenário 1: Realizar compra de um produto com sucesso
- **Dado** que realizei o login com um usuário válido no SauceDemo
- **Quando** adiciono o produto "Sauce Labs Backpack" ao carrinho
- **E** navego até a tela do carrinho
- **E** clico no botão de checkout
- **E** preencho os dados do comprador (Nome, Sobrenome e CEP)
- **E** prossigo e finalizo a compra
- **Então** devo visualizar a mensagem de sucesso "Thank you for your order!"