class CheckoutPage {
  
  adicionarProdutoAoCarrinho() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click();
  }

  validarProdutoNoCarrinho() {
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  }

  clicarCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  preencherInformacoesComprador(nome, sobrenome, cep) {
    cy.get('[data-test="firstName"]').type(nome);
    cy.get('[data-test="lastName"]').type(sobrenome);
    cy.get('[data-test="postalCode"]').type(cep);
  }

  continuarCheckout() {
    cy.get('[data-test="continue"]').click();
  }

  validarTotalEFinalizar() {
    cy.get('.summary_total_label').should('be.visible');
    cy.get('[data-test="finish"]').click();
  }

  validarMensagemSucesso() {
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  }
}

export default new CheckoutPage();