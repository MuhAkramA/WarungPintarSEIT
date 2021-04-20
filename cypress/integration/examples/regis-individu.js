import {onformregisterpage}  from '../../support/testobject/testobjectregister'
// type definitions for Cypress object "cy"
///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', () => {
  beforeEach('Open web Application', () =>{
    cy.visit('https://dev.tanamduit.com/index.php?rt=account/registration&client=individual')
  })
  it('login',  () => {
    onformregisterpage.Submitregister()
  })
})