// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('Gist E2E', function() {
    it('Create Gist', function() {
      cy.visit("https://gist.github.com/discover")
      cy.get('.f4 > .mr-3').contains('Sign in').click()
      cy.get('#login_field').type('MuhAkramA')
      cy.get('#password').type('Asmpsh123')
      cy.get('.btn').contains('Sign in').click()
      cy.get('[aria-label="Create new gist"]').click()
      cy.get('.input-block').type('example git')
      cy.get('.CodeMirror-scroll').type('example git')
      cy.get('.details-reset > .btn').click()
      cy.get('.select-menu-modal > :nth-child(2)').click()
      cy.get('.hx_create-pr-button').should('contain','Create public gist').click()
    })

    it('Edit', function() {
        cy.visit("https://gist.github.com/")
        cy.get('.f4 > .mr-3').contains('Sign in').click()
        cy.get('#login_field').type('MuhAkramA')
        cy.get('#password').type('Asmpsh123')
        cy.get('.btn').contains('Sign in').click()
        cy.get('[aria-label="Gist Homepage "]').eq(0).click()
        cy.get('.text-right > .d-none').should('contain','View your gist').click()
        cy.get('a.link-overlay').click({force:true})
        cy.wait(500)
        cy.get('.d-md-flex > :nth-child(1) > .btn').should('contain','Edit').click()
        cy.get('.input-block').type('examplef git')
        cy.get('.CodeMirror-scroll').type('examplef git')
        cy.get('.btn-primary').should('contain','Update public gist').click()
      })

      it('See list gist', function() {
        cy.visit("https://gist.github.com/")
        cy.get('.f4 > .mr-3').contains('Sign in').click()
        cy.get('#login_field').type('MuhAkramA')
        cy.get('#password').type('Asmpsh123')
        cy.get('.btn').contains('Sign in').click()
        cy.get('[aria-label="Gist Homepage "]').eq(0).click()
        cy.get('.text-right > .d-none').should('contain','View your gist').click()
      })

      it('Delete', function() {
        cy.visit("https://gist.github.com/")
        cy.get('.f4 > .mr-3').contains('Sign in').click()
        cy.get('#login_field').type('MuhAkramA')
        cy.get('#password').type('Asmpsh123')
        cy.get('.btn').contains('Sign in').click()
        cy.get('[aria-label="Gist Homepage "]').eq(0).click()
        cy.get('.text-right > .d-none').should('contain','View your gist').click()
        cy.get('a.link-overlay').click({force:true})
        cy.wait(500)
        cy.get(':nth-child(2) > form > .btn').should('contain','Delete').click()
      })
})
  