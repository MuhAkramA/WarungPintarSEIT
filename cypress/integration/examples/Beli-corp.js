import {onbeli_corp}  from '../../support/testobject/belicorp'
// type definitions for Cypress object "cy"
///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {

  describe('My First Test', () => {
    beforeEach('Open web Application', () =>{
      cy.visit('https://dev.tanamduit.com//corp//account/login')
    })

  it('login', function () {
    onbeli_corp.buy()
    })
  })
})
