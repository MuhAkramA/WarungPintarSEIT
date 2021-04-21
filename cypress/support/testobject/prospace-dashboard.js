export class login{

    loginprospace(){
        cy.visit('https://scheduling-dev.prospace.io/login')
        cy.get('input [type="email"]').type('akram@prospace.io')
        cy.get('input [type="password"]').type('Asmpsh123')
    }
}

const onlogin = new login()