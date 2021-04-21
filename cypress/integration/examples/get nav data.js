///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    // Cypress.config('base url', 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf') 
    it.only('get user access key', function(){
        cy.request({
            method: 'POST',
            url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/acc/useraccess',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Ca-Key': '203812398',
                'X-Ca-Signature': 'vuhw+O1P2mxQf4JDQ+qjT/oUZHfUojEOgH/52kFNgoE=',
                'Tenant-Id': '203812398'
            },
            body: {
                
                    "email": "robinvanakram@gmail.com",
                    "customer_type": "I",
            }
        })
            .its('body').then(body => {
             const token = body.useraccesskey
            
             cy.request({
                method: 'GET', 
                url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf/portfolio',
                headers: {
                  'Accept': 'application/json',  
                  'Content-Type' : 'application/json',
                  'X-Ca-Key': '203812398',
                  'X-Ca-Signature': 'bkF0DEEWnONtKyZwL0q5l1UkaUpxIA15U17Z8+jjOis=',
                  'User-Access-Key': token,
                  'Tenant-Id' : '203812398',
                }
                })
                .then(response => {
                    expect(response.body.portfolio[0].productFundManager).to.eq("PT. Bahana TCW Investment Management")
              })
              
        })

    })
    it('get navbar', function () {

        cy.request({
                method: 'GET',
                url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf/product/navhistory/LG002MMSTRKSYA00',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Ca-Key': '203812398',
                    'X-Ca-Signature': 's8YoQn/4T+KKbm48v/RxRRkBcVju0WVxm0zjABObM7U=',
                    'Tenant-Id': '203812398',
                }
            }).as('navprice')
            .then(response => {
                expect(response.status).eq(200)
                expect(response.body).to.have.property('response')
                expect(response.body).to.not.be.null
                expect(response.body.response).to.have.length(951)
                // expect(response.body.response).to.have.length(0).to.include
                expect(response.body.response[0].nav_value).to.eq('1000.0000')
            })
           
        cy.get('@navprice').then( xhr =>{
            console.log(xhr)
        })

    })

})
