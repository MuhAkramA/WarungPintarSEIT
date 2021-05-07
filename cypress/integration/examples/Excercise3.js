///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('exercise 3 SDET warung pintar', function () {
    it('exercise 3', function(){
        cy.request({
            method: 'POST',
            url: 'https://run.mocky.io/v3/38201e26-953e-40a6-a465-654ca301ccdd',
            headers: {
              "Accept": "application/json",
              "Content-Type":'charset=UTF-8'
               },
            body: {
                "prefix": "PT",
                "name": "Sejahtera",
                "suffix": "Tbk",
                "industry_id": "1",
                "employee_size": "500",
                "street": "Jl.Sudirman kav. 21",
                "place": "Sudirman Tower",
                "geograph_id": "100",
                "phone": "08561290092"
                }                
        }).then(response => {
            expect(response.status).eq(200)
            expect(response.body).to.have.property('url')
            // expect(response.body).to.not.be.null

            // expect(response.body.message).to.eq('Resource has been created')
        })

    })

})
