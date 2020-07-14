describe('Test Login Back Marcket', () =>{

    beforeEach('Connextion a la page LogIn', () =>{
        cy.visit('https://www.backmarket.fr/register')  
        cy.viewport('macbook-13') 
        cy.clearCookies()
        
    })
    it('Log-In with true email and password', () =>{
        cy.get('#email-signin').type("ziegelmeyer.etienne@yahoo.fr")
        cy.get('#password-signin').type('CybackMar#68')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('Fail log-In', () =>{
        cy.get('#email-signin').should('be.empty')
        cy.get('#password-signin').should('be.empty')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('Log-In email is empty', () =>{
        cy.get('#email-signin').should('be.empty')
        cy.get('#password-signin').type('CybackMar#68')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('Log-In password is empty', () =>{
        cy.get('#email-signin').type('ziegelmeyer.etienne@yahoo.fr', {
            delay:500
        })
        cy.get('#password-signin').should('be.empty')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('email contain @', () =>{
        cy.get('#email-signin').type("ziegelmeyer.etienne@yahoo.fr")
        cy.get('#email-signin').should('contain.value', '@')
       
        cy.get('#password-signin').type('CybackMar#68')
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    it('show password  ', () =>{
        cy.get('#email-signin').type('ziegelmeyer.etienne@yahoo.fr')
        cy.get('[data-test=password-wrapper] > ._3qXNdv-MBFJNzill27fzzJ > [data-test=password-toggle-button]').click()
        cy.get('._36HxYAE3lm-VAy2DCDaFyV').contains('Welcome Back!').click()
    })
    
})