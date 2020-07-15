describe('Test Login Back Marcket', () =>{

    beforeEach('Connextion a la page LogIn', () =>{
        cy.visit('https://www.backmarket.fr/register')  
        cy.url().should('include', '/register')
        cy.viewport('macbook-13') 
        cy.clearCookies()
        
    })
    it('Log-In with true email and password', () =>{
        cy.get('#email-signin').click()
        cy.get('#email-signin').type("email@yahoo.fr")
        cy.get('#password-signin').type('******')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('Input Email and Password are empty ', () =>{
        cy.get('#email-signin').click()
        cy.get('#email-signin').type("email@yahoo.fr").clear({force:true})
        cy.get('#password-signin').type('*****').clear({force:true})
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('Email equal true value', () =>{
        cy.get('#email-signin')
            .type("email@yahoo.fr")
            .should('have.value', 'email@yahoo.fr')
    })
    it('email contain @', () =>{
        cy.get('#email-signin').type("email@yahoo.fr")
        cy.get('#email-signin').should('have.value', '@')
        cy.get('#password-signin').type('******')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('show password  ', () =>{
        cy.get('#email-signin').type('email@yahoo.fr')
        cy.get('[data-test=password-wrapper] > ._3qXNdv-MBFJNzill27fzzJ > [data-test=password-toggle-button]').click()
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    
})