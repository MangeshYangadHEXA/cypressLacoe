describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Resource repo add', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 
 
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings")

    cy.xpath("//div[text()='Masters']").click()
    
    cy.xpath("//h4[normalize-space()='Resource Repository']").click()

    cy.get('.loco-plus').click()

    cy.get("[placeholder='Enter category']").type("SampleCategory")

    //cy.get("[data-pc-name='button']").click() ///save request


    cy.get("[class='loco-close text-xs']").click()

    cy.xpath("//div[text()='Tags']").click()

    cy.get(".loco-plus").click()

    cy.get("[placeholder='Enter tag']").type("sampleTag")

    //cy.get("[data-pc-name='button']").click()  ///save button 

    cy.get("[class='loco-close text-xs']").click

  })

})