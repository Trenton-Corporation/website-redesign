describe("Homepage", () => {
  it("Successfully loads", () => {
    // Start on homepage
    cy.visit("http://localhost:3000/");
  });

  it("Displays 'Call Us' and 'Send A Message' links", () => {
    // Find all 'Call Us' and 'Send a message' links & make sure they work
    cy.get("a:contains(Call us)").each(($link) => {
      expect($link).to.have.attr("href", "tel:+17344243600");
    });

    cy.get("a:contains(Send a message)").each(($link) => {
      expect($link).to.have.attr("href", "/contact");
    });
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

describe("Section one (above the fold)", () => {
  it("Displays title & subtitle", () => {
    // Find headers and confirm their text
    cy.get('[data-testid="section_one"]').contains(
      "h2",
      "Effective, long-lasting anti-corrosion protection above and below ground"
    );

    cy.get('[data-testid="section_one"]').contains(
      "h3",
      "Anti-corrosion wraps, wax coatings, casing fillers, and marine pile protection systems worldwide for oil, gas, water, and chemical processing companies."
    );
  });

  it.skip("Displays visual", () => {
    // Make sure the visual is rendered and visible; will fail until image is added.
    cy.get('[data-testid="section_one"]')
      .find("img")
      .should("exist")
      .and("be.visible");
  });

  it("Displays social proof", () => {
    // Find all 'Call Us' and 'Send a message' links & make sure they work
    cy.get('[data-testid="section_one"]').contains(
      "p",
      "Our products are easy to use and don’t require special tools. Thousands of miles of pipelines worldwide are protected by Trenton systems."
    );
  });
});

describe("Section two", () => {
  it("Displays title & subtitle", () => {
    // Find headers and confirm their text
    cy.get('[data-testid="section_two"]').contains(
      "h2",
      "Since 1949 the Trenton Corporation has offered a range of wax-based anti-corrosion products to protect pipelines"
    );

    cy.get('[data-testid="section_two"]').contains(
      "p",
      "Our high quality, long- lasting products provide optimal anti-corrosion protection"
    );
  });

  it.skip("Displays visual", () => {
    // Make sure the visual is rendered and visible; will fail until images are added.
    cy.get('[data-testid="section_two"]')
      .find("img")
      .should("exist")
      .and("have.length", 4)
      .and("be.visible");
  });

  it("Displays product features", () => {
    // Find main navigation links and check their link text
    cy.get('[data-testid="features"]')
      .should("contain", "No special tools required")
      .and("contain", "Easy application")
      .and("contain", "User friendly")
      .and("contain", "Minimal surface preparation")
      .and("contain", "Conformable to irregular surfaces")
      .and("contain", "Removable for inspection")
      .and("contain", "Compatible with other coatings")
      .and("contain", "No drying or curing time before backfill")
      .and("contain", "Environmentally friendly")
      .and("contain", "Clean MSDS")
      .and("contain", "Noncarcinogenic");
  });
});

describe("Section three", () => {
  it("Displays title", () => {
    // Find header and confirm its text
    cy.get('[data-testid="section_three"]').contains(
      "h2",
      "These systems are used by major oil, gas, water and chemical processing companies worldwide."
    );
  });

  it("Displays product titles", () => {
    // Find product titles and confirm their text
    cy.get('[data-testid="section_three"]')
      .should("contain", "Non-toxic coating for pipelines")
      .and("contain", "Valve, Flange and Piping Protection")
      .and("contain", "Atmospheric piping protection");
  });

  it.skip("Displays images", () => {
    // Make sure all images are rendered and visible; will fail until images are added.
    cy.get('[data-testid="section_three"]')
      .find("img")
      .should("exist")
      .and("have.length", 3)
      .and("be.visible");
  });
});

describe("Frequently asked questions", () => {
  it("Displays title", () => {
    // Find header and confirm its text
    cy.get('[data-testid="faq"]').contains("h2", "Frequently Asked Questions");
  });

  it("Displays questions and answers", () => {
    // Find all questions and confirm their text
    cy.get('[data-testid="faq"]')
      .should(
        "contain",
        "Where are your products manufactured? Are they made in the USA?"
      )
      .should(
        "contain",
        "Trenton products are manufactured on-site, in the United States, at our facility in Ann Arbor, Michigan."
      )
      .and(
        "contain",
        "Do Trenton’s anti-corrosion wraps provide aboveground and belowground protection?"
      )
      .should(
        "contain",
        `Yes. Wax-Tape®#1 non-firming anticorrosion wrap resists corrosion on belowground pipe, including wet and irregular surfaces.

      Wax-Tape® #2 self-firming anticorrosion wrap resists atmospheric corrosion on aboveground and belowground pipe, bridge crossings, vaults, and other straight or irregular surfaces.`
      )
      .and("contain", "Where can I ask questions or place an order?");
  });
});
