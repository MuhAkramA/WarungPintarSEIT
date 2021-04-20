
export class formregisterpage{
    
    Submitregister(){
        cy.get("#beneficial_option label").eq(0).click()
        cy.get("#id_number").type("3604091208990009")
        cy.get('#fullname').type('roberto baggio')
    
        const filepath = 'images/Capture.png'
        cy.get('#ktp').attachFile(filepath)
        cy.get('#selfie').attachFile(filepath)
    
    
        cy.get("#mother_name").type('sunsilk')
        cy.get('#place_of_birth').type("nugini")
        cy.get('#date_of_birth').click()
        cy.get('.ui-datepicker-year').select('1980')
        cy.get('.ui-datepicker-month').select('11')
        cy.get('tbody tr, [class="ui-state-default"]').eq(12).click()
    
        cy.get('.ui-datepicker-calendar').contains('1').click()
        cy.get('#gender').contains("Laki-laki").click()
        cy.get('#marital_status label:nth-child(2)').click()
        cy.get("#education").select('1').should('contain', 'Sekolah Dasar')
        cy.get('[name="religion"]').should('contain', 'Islam').select('Islam')
        cy.get("#mobile_phone_number").type('9182373134')
        cy.get("#email").type('aszzkd@gmail.com')
        cy.get("#occupation").select('2')
        cy.get("#gross_income").select('3')
        cy.get("#source_of_fund").select('7')
        cy.get("#investment_objective").select('2')
    }
}

export const onformregisterpage = new formregisterpage()