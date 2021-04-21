import {onlogin}  from '../../support/testobject/prospace-dashboard'
// type definitions for Cypress object "cy"
///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {

  describe('My First Test', () => {
    beforeEach('Open web Application', () =>{
      cy.visit('https://scheduling-dev.prospace.io/login')
      cy.get('input [type="email"]').type('akram@prospace.io')
      cy.get('input [type="password"]').type('Asmpsh123')
    })

  it('login', function () {
    onbeli_corp.buy()
    })
  })
})