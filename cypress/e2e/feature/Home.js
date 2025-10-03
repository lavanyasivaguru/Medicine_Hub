import { Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("The user is on the home page", function() {
  cy.visit(Cypress.env('URL')); 
});

When("check the icon is present", function () {
  cy.get("img[title='Medizinhub']").should('be.visible');
})

When("The user enters {String} in the search bar", function(){

})

And("The user clicks the search button", function(){

})

Then("The search results should display {String}", function(){

})