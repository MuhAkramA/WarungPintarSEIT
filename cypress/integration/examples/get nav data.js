///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    // Cypress.config('base url', 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf') 
    it('login', function () {
        cy.request({
                method: 'GET',
                url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf/product/navhistory/LG002MMSTRKSYA00',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Ca-Key': '25887230',
                    'X-Ca-Signature': 'IODftEPZmkELU/uHrlf7l/0dNq+kfY3CZhADgMa5bPo=',
                    'Tenant-Id': '25887230',
                }
            })
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('response')
                expect(response.body).to.not.be.null
                expect(response.body.response).to.have.length(949)
                // expect(response.body.response).to.have.length(0).to.include
                expect(response.body.response[0].nav_date_timestamp).eq('1482339600000')
            })


    })
})