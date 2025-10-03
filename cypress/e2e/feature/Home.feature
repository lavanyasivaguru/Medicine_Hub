
Feature: Home page
Background: Background name
     Given The user is on the home page

Scenario: Logo present  
    When check the icon is present
    Then okay to work

 Scenario: Search for a product 
    When The user enters "Paracetamol" in the search bar
    And The user clicks the search button
    Then The search results should display "Paracetamol"