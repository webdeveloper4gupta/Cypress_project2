// here i write the first test code
it('google test',function(){
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("welcome to code world").type('{enter}')
    cy.get('#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
})