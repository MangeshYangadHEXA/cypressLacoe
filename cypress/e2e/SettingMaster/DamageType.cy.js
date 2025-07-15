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
    
    cy.xpath("//h4[normalize-space()='Damage Type']").click()

    cy.get(".loco-plus").click()

    cy.get("[data-pc-name='inputtext']").eq(4).type("Broken")

    cy.get("[data-pc-name='button']").click()

    

  })
})