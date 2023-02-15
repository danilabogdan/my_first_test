
f
describe('this test', () => {
  
  it('test success', () => {

    // steps
    cy.visit('https://danilabogdan.tech/')

    cy.title().should('eq', 'Dănilă Bogdan - Contact')

    cy.get('')

  })


  it('this test should fail', () => {
    cy.visit('https://danilabogdan.tech/')


    cy.title().should('eq', 'dala')
  })
})