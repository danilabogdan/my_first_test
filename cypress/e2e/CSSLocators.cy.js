const cypress = require('cypress')


describe('What are CSSLocators blud?', () => {
    it('these are css locators', () => {

        cy.visit('https://danilabogdan.tech/')

        cy.get('.form-control').type('')
        
    });
});