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
    
    cy.xpath("//h4[normalize-space()='Survey']").click()

    cy.get('.loco-plus').click()

    cy.get("[placeholder='Title']").type("TestSurvey")

    cy.get('#startDate > .p-datepicker-trigger').click()

    cy.get("[class='p-datepicker-today']").click()

    cy.get('#endDate > .p-datepicker-trigger').click()

    cy.get("[data-pc-section='daylabel']").eq(18).click()

    cy.get("[data-pc-section='triggericon']").click()

    cy.get("[role='option']").eq(2).click()
    
    //cy.get("[data-pc-name='button']").eq(5).click()

    
    
    cy.get('.disable_tabs_bottomline')

})
})