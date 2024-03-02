describe('cypress studio demo',function(){
   it('first test',()=>{
       
   })

   /* ==== Test Created with Cypress Studio ==== */
   it('my first recorded test', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://trytestingthis.netlify.app/');
      cy.get('#fname').click();
      cy.get('#fname').clear('am');
      cy.get('#fname').type('aman');
      cy.get('#lname').clear('g');
      cy.get('#lname').type('gupta');
      cy.get('#male').check();
      cy.get('#option').select('option 1');
      cy.get('#owc').select(['option']);
      cy.get('#owc').select(['option 1']);
      cy.get(':nth-child(35)').click();
      cy.get('[name="option1"]').check();
      cy.get('[list="datalists"]').clear('t');
      cy.get('[list="datalists"]').type('team india ');
      cy.get('#favcolor').click();
      cy.get('form > fieldset').click();
      cy.get('#day').click();
      cy.get('form > fieldset').click();
      cy.get('#a').click();
      cy.get('#a').click();
      cy.get('#a').click();
      cy.get('#myfile').click();
      cy.get('form > fieldset').click();
      /* ==== End Cypress Studio ==== */
   });
})