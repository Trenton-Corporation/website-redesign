describe("Using the header", () => {
  it("Logo returns user to homepage", () => {
    // Start on homepage
    cy.visit("/");

    // Click the logo
    cy.get('[data-testid="logo"]').click();

    // Confirm we're still on the homepage
    cy.url().should("eq", "http://localhost:3000");
  });
});
