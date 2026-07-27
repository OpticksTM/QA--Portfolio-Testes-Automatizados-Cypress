describe('Fluxo de Compra (Checkout) - SauceDemo', () => {
  
  beforeEach(() => {
    // Acessa a página e faz o login antes de cada teste deste bloco
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user', { delay: 0 });
    cy.get('[data-test="password"]').type('secret_sauce', { delay: 0 });
    cy.get('[data-test="login-button"]').click();
  });

  it('Deve realizar a compra de um produto com sucesso', () => {
    // 1. Adicionar o produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // 2. Clicar no ícone do carrinho
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    
    // 3. Ir para o checkout
    cy.get('[data-test="checkout"]').click();
    
    // 4. Preencher as informações do comprador com atraso para a gravação
    cy.get('[data-test="firstName"]').type('Allyson', { delay: 0 });
    cy.get('[data-test="lastName"]').type('QA', { delay: 0 });
    cy.get('[data-test="postalCode"]').type('29000000', { delay: 0 });
    cy.get('[data-test="continue"]').click();
    
    // 5. Validar o resumo da compra e finalizar
    cy.get('.summary_total_label').should('be.visible');
    cy.get('[data-test="finish"]').click();
    
    // 6. Validar mensagem de sucesso do pedido
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

});