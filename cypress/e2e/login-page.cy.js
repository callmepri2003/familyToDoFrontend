describe('The Login Page', () => {
  
    // Successful login
    it('sets auth cookie when logging in via form submission with correct credentials', function () {
      const { username, password } = { username: "tester", password: "boilingplate1" }
      
      cy.visit('/login')
      
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(`${password}{enter}`)
      
      // We should be redirected to the homepage or a success page
      cy.url().should('not.include', '/login')
    })
  
    // Invalid username or password
    it('displays an error message when incorrect credentials are provided', function () {
      const { username, password } = { username: "tester", password: "wrongpassword" }
      
      cy.visit('/login')
      
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(`${password}{enter}`)
      
      // Expect the URL to remain on /login and an error message to show
      cy.url().should('include', '/login')
      cy.contains('Invalid username or password').should('be.visible')
    })
  
  })
  