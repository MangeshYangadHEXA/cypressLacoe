describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Asset add', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 
 
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings")

    cy.wait(4000)
    cy.xpath("//div[text()='Masters']").click()
    
    cy.xpath("//h4[normalize-space()='District']").click()

    cy.get(".loco-plus").click()

    cy.wait(3000)

    cy.get(':nth-child(2) > .cust-dropdown > .w-full').type("DFG")

    cy.xpath("//a[text()='Next']").click()
    
    //cy.xpath("//button[contains(@type,'submit')]").click()
    
    


  })
})
