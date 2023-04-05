describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000')
    })

    it('look for app', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.url().should('include', '/')
        cy.get('.App h1').should('have.text', 'NASA API Project')
    })

    // beforeEach(() => {
    //   cy.visit('http://localhost:3000/pod')
    // })
    // it('testing pod header, image, and url ', () => {    
    //  cy.url().should('include', '/pod')
    //  //Since data changes daily, test cases would change too
    //  cy.get('.App-header h1').should('have.text', "Rubin's Galaxy")
    //  //cy.get('.App-header p').should('have.text', '2023-04-05')
    //  cy.get('.App-header img').find(nasaResponse.url)
    // })

    // beforeEach(() => {
    //   cy.visit('http://localhost:3000/mars')
    // })
    // it('look for mars', () => {    
    //  cy.url().should('include', '/mars')
    // })
    
})
