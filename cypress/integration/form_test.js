describe("testing our form inputs", () =>{

    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })

    it("Testing: ",()=>{
        cy.get(':nth-child(2) > input')
          .type("Mohammad Miah")
          .should("have.value", "Mohammad Miah")
          
// email test
        cy.get(':nth-child(4) > input')
          .type("miahmo652@outlook.com")
          .should("have.value", "miahmo652@outlook.com")
// password test
          cy.get(':nth-child(6) > input')
            .type("password")
            .should("have.value", "password")
// terms checked test
        cy.get('#terms')
          .check()
          .should("be.checked")
// submit
        cy.get('form').submit()
// cleared name and check for validation
        cy.get(':nth-child(2) > input')
          .clear();
        cy.contains("Name is a required field")
    });
});

// .clear();
// 