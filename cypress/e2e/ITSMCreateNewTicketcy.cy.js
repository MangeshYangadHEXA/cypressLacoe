describe('template spec', () => {
  it('test title', () => {
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai')
    cy.title().should('eq','LACOE | User Login')

  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('test CreateTicket', () => {
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai');


  cy.xpath('//input[@id="username"]',{ timeout: 2000 })
  .should('be.visible').type('admin@gmail.com');
  cy.xpath("//input[@placeholder='Password']").type("123456")
  cy.xpath("//div[text()='Login']").click()
  
  cy.wait(4000)
  //cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/common/mytickets");
  //cy.wait(7000)
  //need to make certain stop or delay to check the url
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/common/mytickets/create')

  

  cy.get("textarea[placeholder='Type Here']").type("Sample")
  cy.get("[data-placeholder='Type Here']").type('Desc')
  //cy.get("#accordion__heading-item2").click
  cy.get(".flex.gap-2 > [alt='resource']").eq(1).click();
  
  cy.xpath("//button[text()='SUN']").click

  cy.get("input[placeholder='--Type here--'][type='text']").type("8888888888")

  cy.contains('[data-accordion-component="AccordionItemButton"]', 'Asset Information').click();
  
  cy.wait(2000)  

  cy.xpath("(//div[@class='p-dropdown-trigger'])[6]").click


  cy.get(".p-dropdown-trigger").eq(7).click();

  cy.wait(3000)
  cy.xpath("//li[@id='dropdownItem_1']").click()
  
  cy.get("[data-pc-name='button']").click()

  //cy.get("[data-pc-name='button']").click
  //cy.xpath("//button[text()='Submit']").click

  cy.xpath("//button[text()='No']").click()

})
  
})
