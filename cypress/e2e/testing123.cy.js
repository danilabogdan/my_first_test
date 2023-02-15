

describe('this test', () => {
  
  it('test success', () => {

    // steps
    cy.visit('https://danilabogdan.tech/')

    cy.title().should('eq', 'Dănilă Bogdan - Contact')

  })


  it('this test should fail', () => {
    cy.visit('https://danilabogdan.tech/')


    cy.title().should('eq', 'dala')
  })
})