describe('Back market authentication  Test ', () =>{

    beforeEach('Connextion a la page LogIn', () =>{
        cy.visit('https://www.backmarket.fr/register')  
        cy.url().should('include', '/register')
        cy.clearCookies()
        
    })
    it('Connextion succefull', () =>{
        cy.get('#email-signin').click()
        cy.wait(2000)
        cy.get('#email-signin').type('myrightemail@ymail.fr')
        cy.get('#password-signin').type('RightPassWord')
        cy.contains('Welcome Back!').click()
        cy.wait(2000)
        cy.visit('https://www.backmarket.fr/dashboard/orders')  
        cy.url().should('include', '/dashboard/orders')
    })
    it('Email should be empty', () =>{
        cy.get('#email-signin').click()
        cy.wait(2000)
        cy.get('#email-signin')
        cy.get('#password-signin').type('RightPassWord')
        cy.contains('Welcome Back!').click()
        cy.contains('Le champ "Email" est obligatoire').should('be.visible')
    })
    it('Email should not valid format', () =>{
        cy.get('#email-signin').click()
        cy.wait(2000)
        cy.get('#email-signin').type('mywrongmail@mail.fr')
        cy.get('#password-signin').type('RightPassWord')
        cy.contains('Welcome Back!').click()
        cy.contains('Mauvaise combinaison email/mot de passe').should('be.visible')
    })
    it('Password should not valid format', () =>{
        cy.get('#email-signin').click()
        cy.wait(2000)
        cy.get('#email-signin').type('myrightemail@ymail.fr')
        cy.get('#password-signin').type('WrongPassWord')
        cy.contains('Welcome Back!').click()
        cy.contains('Mauvaise combinaison email/mot de passe').should('be.visible')
    })
    it('Welcome Back! button disable', () => {
        cy.get('#email-signin').click()
        cy.wait(2000)
        cy.get('#email-signin').type('myrightemail@ymail.fr')
        cy.get('#password-signin').type('WrongPassWord')
        cy.contains('Welcome Back!').click()
        cy.get('#password-signin').type('{del}{selectall}{backspace}')
        cy.contains('Welcome Back!').should('be.disabled')
        cy.contains('Merci de saisir un mot de passe valide.').should('be.visible')
        cy.contains('Mauvaise combinaison email/mot de passe').should('be.visible')
        
    })
    
   
})