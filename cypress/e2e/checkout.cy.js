import LoginPage from '../support/pages/login.page';
import CheckoutPage from '../support/pages/checkout.page';

describe('Fluxo de Compra (Checkout) - SauceDemo (com POM)', () => {
  
  beforeEach(() => {
    // Faz o login usando o Page Object de login
    LoginPage.fazerLogin('standard_user', 'secret_sauce');
  });

  it('Deve realizar a compra de um produto com sucesso', () => {
    // Executa as ações usando o Page Object de checkout
    CheckoutPage.adicionarProdutoAoCarrinho();
    CheckoutPage.irParaCarrinho();
    CheckoutPage.validarProdutoNoCarrinho();
    CheckoutPage.clicarCheckout();
    CheckoutPage.preencherInformacoesComprador('Allyson', 'QA', '29000000');
    CheckoutPage.continuarCheckout();
    CheckoutPage.validarTotalEFinalizar();
    CheckoutPage.validarMensagemSucesso();
  });

});