// Bloco principal que agrupa os testes de login do SauceDemo
describe('Testes de Login - SauceDemo', () => {

  // Cenário de teste: Validando o login com sucesso
  it('Deve realizar o login com sucesso utilizando credenciais válidas', () => {
    
    // 1. Acessa a página principal do sistema de testes
    cy.visit('https://www.saucedemo.com/')

    // 2. Localiza o campo de usuário pelo ID e digita o usuário padrão
    cy.get('#user-name').type('standard_user')

    // 3. Localiza o campo de senha pelo ID e digita a senha padrão
    cy.get('#password').type('secret_sauce')

    // 4. Localiza o botão de login e executa a ação de clique
    cy.get('#login-button').click()

    // 5. Validação (Assert): Confirma que a URL mudou para a página de inventário/produtos
    cy.url().should('include', '/inventory.html')

    // 6. Validação (Assert): Confirma que o título da página exibe exatamente o texto "Products"
    cy.get('.title').should('have.text', 'Products')
    
  })

})