import routesFixtures from "../utils/routes"
describe('Login test', () => {
  it('it should be able to do the login successfully', () => {
    cy.login()
    cy.fixture(routesFixtures.dashboardPath).then((the)=>{
      cy.get(the.tittle).should('have.text', "Logged In Successfully")
      cy.get(the.logoutButton).should('have.text', "Log out")
    });
  })
})