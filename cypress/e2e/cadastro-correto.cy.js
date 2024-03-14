import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#home')
  })

      it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
        
        // cy.get('[data-test="register"]').click();
        // cy.get('input[data-test="email"]').type('lllll@lll.com');
        // cy.get('input[data-test="fullName"]').type('Lllll Llllll');
        // cy.get('input[data-test="registerUserName"]').type('lllll');
        // cy.get('input[data-test="registerPassword"]').type('lllLLLlll');
        // cy.get('[data-test="btnRegister"]').click();
        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro();

      })

})