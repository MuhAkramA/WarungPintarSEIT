///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function() {
    it('login', function() {
        cy.request({
            method: 'GET',
            url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf/product/navhistory/LG002MMSTRKSYA00',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
                'X-Ca-Key':'25887230',
                'X-Ca-Signature':'IODftEPZmkELU/uHrlf7l/0dNq+kfY3CZhADgMa5bPo=',
                'Tenant-Id':'25887230',
            }
        }).then(response => {
            expect(response.status).to.eq(201)
          })
        

    })
})