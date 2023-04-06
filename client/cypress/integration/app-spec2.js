beforeEach(() => {
      cy.visit('http://localhost:3000/pod')
    })
    it('testing pod header, image, and url ', () => {    
     cy.url().should('include', '/pod')
     //Since data changes daily, test cases would change too
     //cy.get('.App-header h1').should('have.text', "Rubin's Galaxy")
     //cy.get('.App-header p').should('have.text', '2023-04-05')
     //cy.get('.App-header img').find(nasaResponse.url)
    })