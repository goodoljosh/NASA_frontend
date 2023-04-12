beforeEach(() => {
  cy.intercept('https://3001-csuwebdev-nasabackend-9fvcjtxgp4e.ws-us93.gitpod.io/npod' , {fixture: 'poddata.json'})
  cy.visit('http://localhost:3000/pod')
})
it('testing pod elements', () => {    
 cy.url().should('include', '/pod')
 //Since data changes daily, test cases would change too
 //Should return whatever our json object is?
 cy.get('.App-header h1').should('have.text', "banana")
 //cy.fixture('http://localhost:3000/pod').as(poddata.json)
 cy.get('.App-header p').should('have.text', "")
 //cy.get('img').find()
})