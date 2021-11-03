describe("Homepage", () => {
  it("shows header", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("h1").contains("Trenton Corporation");
  });
});
