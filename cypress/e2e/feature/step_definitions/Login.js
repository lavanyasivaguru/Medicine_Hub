import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  cy.visit("/login"); // Adjust to your login page route
});

When("the user enters valid username and password", () => {
  cy.get('input[name="username"]').type("testuser");
  cy.get('input[name="password"]').type("Password123");
});

When("the user enters an invalid username or password", () => {
  cy.get('input[name="username"]').type("wronguser");
  cy.get('input[name="password"]').type("wrongpass");
});

When("clicks the login button", () => {
  cy.get('button[type="submit"]').click();
});

Then("the user should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("a welcome message should be displayed", () => {
  cy.contains("Welcome").should("be.visible");
});

Then("an error message should be displayed", () => {
  cy.contains("Invalid username or password").should("be.visible");
});