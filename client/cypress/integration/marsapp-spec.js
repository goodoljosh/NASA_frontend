beforeEach(() => {
      cy.intercept('https://nasa-backend.onrender.com/mars', {fixture: 'marsdata.json'})
      cy.visit('http://localhost:3000/mars')
    })
    it('look for mars', () => {    
     cy.url().should('include', '/mars')
     //cy.get('class="image"').find("img").should('be.visible');
     cy.get('footer').should('have.text', "Mars Photos Page")
    })