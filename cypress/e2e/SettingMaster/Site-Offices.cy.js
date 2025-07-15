describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Site/Office add', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 
 
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings")

    cy.wait(4000)
    cy.xpath("//div[text()='Masters']").click()
    
    cy.xpath("//h4[normalize-space()='Site/Offices']").click()

    cy.wait(2000)
    cy.get(".loco-plus").click()

    cy.get("[placeholder='Site Code ']").type("SC-00017")
    //SC-00000007
    cy.get("[placeholder='Site Name']").type("Jnki")


    cy.get("[data-pc-section='dropdownicon']").eq(1).click()

    cy.get('#dropdownItem_1').click()

    cy.get("[data-pc-section='dropdownicon']").eq(2).click()

    cy.get('#dropdownItem_1').click()

    cy.xpath("//div/button[text()='Next']").click()

    cy.xpath("//div/button[text()='Next']").click()

    cy.get("[data-pc-name='button']").click()

    cy.get("[title='Edit']").eq(0).click()

    cy.xpath("//div/button[text()='Next']").click()

    cy.xpath("//div/button[text()='Next']").click()

    cy.get("[data-pc-name='button']").click()

   
  })
})