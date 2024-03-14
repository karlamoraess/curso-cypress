describe('Página de login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')})
    
    it('Preencher os campos de login corretamente', () => {
      cy.login('catarinap','catarina123')
            
    })
  })