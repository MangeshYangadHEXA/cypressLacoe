describe('template spec', () => {
  it('test title', () => {
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai')
    cy.title().should('eq','LACOE | User Login')

  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('test Reassign', () => {
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai');

  cy.xpath('//input[@id="username"]',{ timeout: 2000 })
  .should('be.visible').type('admin@gmail.com');
  cy.xpath("//input[@placeholder='Password']").type("123456")
  cy.xpath("//div[text()='Login']").click()
  cy.wait(3000)
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/common/manageadmintickets'); 
  cy.wait(2000)
  cy.xpath("//button[text()='Global Workspace']").click()

  cy.scrollTo(0, 500);
  //cy.xpath("//tbody/tr[1]/td[19]/div[1]/button[1]/div[1]/img[1]").click()
  //cy.wait(3000)
  //cy.xpath("//(//button/div[@class='cursor-pointer'])[2]").click()
  
  cy.get("[placeholder='Search Re-routed Tickets']")
  .scrollIntoView() // Cypress will scroll its parent horizontally if needed
   
  cy.xpath("//span[text()='Select Status']").click()
  
  cy.get("[data-pc-section=itemlabel]").eq(0).click()
  
  cy.get("[src='/images/supportdesk/edit.svg']").eq(1).click();

  cy.get(".pi.pi-angle-down").eq(1).click()

  cy.xpath("//button[text()='Re-Assign']").click()

  cy.get("[aria-label='--Select Technician--']").click()

  cy.get("[aria-label='Innive Tech_Lead (STF-03)']").click()

  cy.get("[data-pc-name=inputtextarea]").type("Testing UN-ASSIGN")

  cy.xpath("//button[text()='Yes']").click()

  });
  })
