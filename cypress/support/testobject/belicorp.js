
export class beli_corp{
    
    buy(){
        cy.get('[type="email"]').type("tes678maker")
    // cy.get('#password').parents('.login-box').find('input').eq(1).type('as')
    cy.contains('.login-box', 'password').find('#password_div').type('Password123')
    cy.get('div div #password_div')
    cy.get("#dologin").click()
    cy.get("button.portfolio-new").contains("PILIH PRODUK").click()
    cy.get('.product-name').should('have.length', 32)
    cy.get('.product-name:visible').should('have.length', 32)
    cy.get("div .product-buy").first().contains('BELI').click()
    cy.wait(500)
    cy.get('.modal-content').find(".buy-info-name").contains('Batavia Dana Kas MAXIMA')
    cy.get('#buy_amount').type("500000")
    cy.get('button.btn-buy-continue').contains("LANJUT").click()
    cy.contains("#accordion").find('[type="radio"]').check()
    cy.get('#payment-description-manual_banktransfer').should('contain','Anda bisa membayar dengan ATM, Internet Banking, Mobile Banking.')
    cy.contains()
    cy.get("#aggre_div > label > span").click()
    cy.get("#prospectus-modal").find("button.close").click()
    cy.get("#continue").click()

    }
}


const onbeli_corp = new beli_corp()