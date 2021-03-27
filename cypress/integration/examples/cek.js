// type definitions for Cypress object "cy"
// <reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />
describe('My First Test', function() {
  it('login', function() {
    cy.visit("https://dev.tanamduit.com//corp//account/login");
    cy.get('#loginname').type("tes678maker")
    cy.get("#password").type("Password123")
    cy.get("#dologin").click()
    cy.get("div div .overview-tabs a span").eq(2).click()
    cy.get(".transactions-btn-row").contains("PRINT").eq(0).click()
    // cy.get(".product-buy").eq(0).contains('BELI').click()
  //   cy.get('#buy_amount').type("500000")
  //   cy.get('button.btn-buy-continue').contains("LANJUT").click()
  //   cy.get(".payment-method-div").click()
  //   // cy.get("#aggre_div > label > span").click()
  //   // cy.get("#prospectus-modal").find("button.close").click()
  //   // cy.get("#continue").click()
  //   cy.get(".navbar-logo").then(function(logbusiness)
  // {
  //   cy.log(logbusiness.text())
  })
  })
