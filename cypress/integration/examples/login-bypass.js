///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
    // Cypress.config('base url', 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf') 
    it.only('Login bypass Captcha', function(){
        cy.request({
            method: 'POST',
            url: 'https://conference-api-dev.prospace.io/auth/login/skipcaptcha',
            headers: {
              "Accept": "application/json;charset=UTF-8",
              "Content-Type":'application/json;charset=UTF-8',
              'x-csrf-token': 'K2p4YmhRS29ReVRVaVFDQmtQMmRrZ0V6WGlkcEp5WHBkV2RjWTlGT0lnakl0cCtDdTlzQ1F5Rmh5UFQ3REJoU3VoMk81VFJUSjRWVXRhSlNJMlFpT2p1ajlyS1JOd3hWNjBqcmZuOS9NbGc9'
            },
            body: { 
                "email": "akram@prospace.io",
                "password": "@$Mpsh123",
                "source": "WEB",
                "recaptchaResponse": "string"
              }
        })

    })

})
