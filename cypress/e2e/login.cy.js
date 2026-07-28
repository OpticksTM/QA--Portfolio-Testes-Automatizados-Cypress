import LoginPage from '../support/pages/login.page';

describe('Fluxo de Autenticação - SauceDemo (com POM)', () => {

  it('Deve realizar o login com sucesso usando credenciais válidas', () => {
    // Usando os métodos da nossa classe Page Object
    LoginPage.acessarSite();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();

    // Validação que continua no teste
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

});