beforeEach(() => {
      cy.visit('http://localhost:3000/mars')
    })
    it('look for mars', () => {    
     cy.url().should('include', '/mars')
    })