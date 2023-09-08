//baseUrl:"https://www.clicdata.com/dashboards/balance-sheet",

import {routesFixtures} from "../utils/routes"

describe('dashboard test', () => {
  it('testing graph', () => {
    cy.visit("/");

    cy.fixture(routesFixtures.dashboardPath).then((the)=>{
      cy.iframe(the.iframe).find(the.workCapitalLabel).should('have.text', 'Working Capital');
      cy.iframe(the.iframe).find(the.totalEquityLabel).should('have.text', 'Total Equity');
      cy.iframe(the.iframe).find(the.workCapitalValues).each((value)=>{
        const regex: RegExp = /^-?\$\d+(\.\d{1})?K$/;
        cy.wrap(value).invoke('text').should('match', regex)
      })
      cy.iframe(the.iframe).find(the.totalEquityValues).each((value)=>{
        const regex: RegExp = /^-?\$\d+(\.\d{1})?K$/;
        cy.wrap(value).invoke('text').should('match', regex)
      })
    })
  })
})

