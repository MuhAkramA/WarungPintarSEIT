// type definitions for Cypress object "cy"
///<reference types="Cypress" />
///<reference types="Cypress-iframe" />

import 'cypress-iframe'

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    it('navigates', () => {
        cy.visit('https://scheduling-dev.prospace.io/login')
        cy.get('[type="email"]').type("darvin@prospace.io")
        cy.get('[data-testid="login__password-input"]').type("@$123456")
        cy.get('[data-testid="login__submit-button"]').click()
        cy.get('iframe')
        cy.frameLoaded('[title="recaptcha challenge"]').its('0.contentDocument.body').should('not.be.empty')
    })

  })
