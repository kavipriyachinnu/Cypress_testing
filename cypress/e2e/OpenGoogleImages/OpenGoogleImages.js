// Import Cypress commands and assertions
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps';

// Given step: Set up the initial context
Given('the user opens the google homepage', () => {
  // Visit a URL to your homepage)
  cy.visit('https://www.google.com/');
});

// When step: Navigate to the Google website
When('the user navigates to the images button', () => {
  //cy.wait(20000)
  // Visit the Google homepage
  cy.get('#L2AGLb > .QS5gu').click();
});

// Then step: Verify Google homepage elements
Then('the user click on search bar', () => {
  // Assert that the search bar and Google logo elements are visible
  cy.get(':nth-child(2) > .gb_X').click();

});

// And step: Verify the URL of the page
And('the URL of the page should be {string}', (expectedUrl) => {
  // Assert that the current URL matches the expected URL
  cy.url('#APjFqb').should('contains','/imghp?hl=en&ogbl');
  //cy.url().should('eq', 'https://www.google.com/imghp?hl=en&ogbl');
});
