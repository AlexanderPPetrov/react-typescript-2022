describe("Counter functionality", () => {
  it("Checks whether counter is working properly", () => {
    cy.visit("http://localhost:3000");
    cy.get("#counter-success").should("not.exist");
    cy.get("#count-increment").click();
    cy.get("#count-value").should("have.value", "1");
    cy.get("#count-increment").click();
    cy.get("#count-value").should("have.value", "2");
    cy.get("#count-increment").click();
    cy.get("#count-value").should("have.value", "3");
    cy.get("#count-increment").click();
    cy.get("#count-value").should("have.value", "4");
    cy.get("#counter-success").should("exist");
  });
});
