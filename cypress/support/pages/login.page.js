class LoginPage {
  // 1. Mapeamento de elementos (ou métodos que retornam os elementos)
  // No Cypress, podemos criar métodos para preencher os campos e clicar
  
  acessarSite() {
    cy.visit('https://www.saucedemo.com/');
  }

  preencherUsuario(username) {
    cy.get('[data-test="username"]').type(username);
  }

  preencherSenha(password) {
    cy.get('[data-test="password"]').type(password);
  }

  clicarLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  // Método unificado para facilitar o login completo se necessário
  fazerLogin(username, password) {
    this.acessarSite();
    this.preencherUsuario(username);
    this.preencherSenha(password);
    this.clicarLogin();
  }
}

// Exportamos a classe para ela poder ser usada nos testes
export default new LoginPage();