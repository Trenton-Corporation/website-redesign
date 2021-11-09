describe("Homepage", () => {
  it("successfully loads", () => {
    // Start on homepage
    cy.visit("http://localhost:3000/");
  });
});

describe("Header", () => {
  it("Clicking logo returns user to homepage", () => {
    // Click the logo
    cy.get('[data-testid="logo"]').click();

    // Confirm we're still on the homepage
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("E-mail address opens mail client", () => {
    // Find e-mail link make sure it works
    cy.get('[data-testid="email"]').should(
      "have.attr",
      "href",
      "mailto:trenton@trentoncorp.com"
    );
  });

  it("Mailing address opens Google Maps", () => {
    // Find mailing address and make sure it sends users to Google Maps
    cy.get('[data-testid="address"]').should(
      "have.attr",
      "href",
      "https://goo.gl/maps/R2QPKQwxUqhZg7k68"
    );
  });

  it("Displays language picker label and options", () => {
    // Find language picker title and check all input labels
    cy.get('[data-testid="language_picker"]')
      .children()
      .should("contain", "Choose language:")
      .and("contain", "English")
      .and("contain", "Español")
      .and("contain", "Français");
  });

  it("Displays main navigation links", () => {
    // Find main navigation links and check their link text
    cy.get('[data-testid="main_navigation"] > ul > li')
      .children()
      .should("contain", "Home")
      .and("contain", "Company")
      .and("contain", "Products")
      .and("contain", "Info Library")
      .and("contain", "Contact");
  });

  it("Displays search label and input", () => {
    // Find search label and check its' value
    cy.get('[data-testid="search_label"]').contains("Search");

    // Check if search input is empty
    cy.get('[data-testid="search_input"]').should("be.empty");
  });
});
