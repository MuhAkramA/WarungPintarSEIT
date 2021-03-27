// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />
describe('My First Test', function() {
  it('login', function() {
    cy.visit("https://dev.tanamduit.com/index.php?rt=account/registration&client=individual")
    cy.get("#beneficial_option label").eq(0).click()
    cy.get("#id_number").type("3604091208990009")
    cy.get('#fullname').type('roberto baggio')

    const filepath = 'images/Capture.png'
    cy.get('#ktp').attachFile(filepath)
    cy.get('#selfie').attachFile(filepath)


    cy.get("#mother_name").type('sunsilk')
    cy.get('#place_of_birth').type("nugini")
    cy.get('#date_of_birth').click()
    cy.get('.ui-datepicker-month').select('2')
    cy.get('.ui-datepicker-year').select('1983')
    cy.get('.ui-datepicker-calendar').contains('1').click()
    cy.get('#gender').contains("Laki-laki").click()
    cy.get('#marital_status label:nth-child(2)').click()
    cy.get("#education").select('5')
    cy.get("#religion").select('1')
    cy.get("#mobile_phone_number").type('9182373134')
    cy.get("#email").type('aszzkd@gmail.com')
    cy.get("#occupation").select('2')
    cy.get("#gross_income").select('3')
    cy.get("#source_of_fund").select('7')
    cy.get("#investment_objective").select('2')
    cy.get("#next_step_1").click()
  })
  })
