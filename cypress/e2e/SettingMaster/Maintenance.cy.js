describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Maintenace add', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 
 
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/common/maintenance')
    
    cy.get('.loco-plus').click()

    cy.get("[placeholder='Type Here']").type("UAT Maintenace add check")

    cy.get("[data-pc-name='button']").eq(0).click()

    cy.get("[class='p-datepicker-today']").click()

    cy.get("[data-pc-name='button']").eq(1).click()

    cy.get("[data-pc-section='daylabel']").eq(31).click()

    cy.get("[class='p-icon p-dropdown-trigger-icon p-clickable']").eq(1).click()

    cy.get("#dropdownItem_0").click()

    cy.get("[class='p-icon p-dropdown-trigger-icon p-clickable']").eq(2).click()

    cy.get("#dropdownItem_2").click()

    cy.get("[placeholder='Type Here']").eq(1).type("Remarks Sample")

    cy.get('loco-plus').click()





  })


})

 




