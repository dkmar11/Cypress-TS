//baseUrl:"https://practicetestautomation.com/practice-test-login",

import {routesFixtures} from "../utils/routes";
import 'cypress-iframe';

Cypress.Commands.add("login", (user:string|undefined, password:string|undefined) => {
  user = user === undefined ? Cypress.env('username') : user;
  password = password === undefined ? Cypress.env('password') : password;
  cy.visit("/");
  cy.fixture(routesFixtures.loginPath).then((the)=>{
    cy.get(the.inputUsername).type(Cypress.env('username'));
    cy.get(the.inputPassword).type(Cypress.env('password'));
    cy.get(the.summitButton).click();
  });
});

