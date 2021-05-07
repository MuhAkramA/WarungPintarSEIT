// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('Scenario 1', function() {
    it('login', function() {
      cy.visit("https://www.ebay.com/")
      cy.get('#gh-cat-box').click()
      cy.get('.gh-cat-box-focus').click()
      cy.get('select#gh-cat.gh-sb').select('15032').should('contain','Cell Phones & Accessories')
      cy.get('input#gh-btn').contains('Search').click()
      cy.get('ul').contains('Cell Phones & Smartphones').click()
      cy.get('li').contains('More refinements').click()
      cy.get('div.x-overlay-main-panel__aspects').find('.x-overlay-aspect__label').contains('Screen Size').click()
      cy.get('div.x-overlay__sub-panel').find('.x-refine__multi-select-label').contains('5.5 - 5.9 in').click()
      cy.get('div.x-overlay-main-panel__aspects').find('.x-overlay-aspect__label').contains('Price').click()
      cy.get('div.x-overlay__sub-panel').find('div.x-textrange__block').eq(0).type('5000000')
      cy.get('div.x-overlay__sub-panel').find('div.x-textrange__block').eq(1).type('7000000')
      cy.get('div.x-overlay-main-panel__aspects').find('.x-overlay-aspect__label').contains('Item Location').click()
      cy.get('div.x-overlay__sub-panel').find('.x-refine__single-select-label').contains('Asia').click()
      cy.get('.x-overlay-footer__apply-btn').contains('Apply').click()
      cy.get('.b-pageheader__text').should('contain','5.5 - 5.9 Inch Cell Phones & Smartphones between IDR5,000,000.00 and IDR7,000,000.00')

    })
    })
  