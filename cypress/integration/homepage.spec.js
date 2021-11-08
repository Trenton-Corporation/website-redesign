describe("Using the header", () => {
  it("Clicking logo returns user to homepage", () => {
    // Start on homepage
    cy.visit("/");

    // Click the logo
    cy.get('[data-testid="logo"]').click();

    // Confirm we're still on the homepage
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Clicking e-mail address opens mail client", () => {
    // // Start on homepage
    // cy.visit("/");

    // Find e-mail link and make sure it includes href "mailto:trenton@trentoncorp.com"
    cy.get('[data-testid="email"]').should(
      "have.attr",
      "href",
      "mailto:trenton@trentoncorp.com"
    );
  });
});
