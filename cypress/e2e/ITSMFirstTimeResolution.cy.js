describe('template spec', () => {
  it('test title', () => {
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai')
    cy.title().should('eq','LACOE | User Login')

  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('test FirstTimeResolution', () => {
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai');

  cy.xpath('//input[@id="username"]',{ timeout: 2000 })
  .should('be.visible').type('admin@gmail.com');
  cy.xpath("//input[@placeholder='Password']").type("123456")
  cy.xpath("//div[text()='Login']").click()
  cy.wait(3000)
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/common/manageadmintickets'); 
  cy.wait(2000)
  cy.xpath("//button[text()='New Tickets']").click()

  cy.scrollTo(0, 500);
  //cy.xpath("//tbody/tr[1]/td[19]/div[1]/button[1]/div[1]/img[1]").click()
  //cy.wait(3000)
  //cy.xpath("//(//button/div[@class='cursor-pointer'])[2]").click()
  

  cy.get("button>div[title='Edit']").eq(3).click();
  cy.scrollTo('bottom');
  cy.xpath("//button[normalize-space()='Update']").click()
  cy.wait(7000)
  cy.scrollTo('top')
  cy.get('.pi.pi-bolt').click()
  cy.xpath("//button[text()='First time resolution ']").click()

  cy.xpath("//span[text()='--Select Team--']").click()

  cy.xpath("//span[text()='LACOE Resolution code']").click()
  
  //cy.get(".w-full.p-inputtextarea.p-inputtext.p-component.p-filled").type('Test Purpose')

  cy.xpath("//button[text()='Yes']").click()


  });
  })
