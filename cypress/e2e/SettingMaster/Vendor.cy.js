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

    cy.wait(2000)
    cy.xpath("//div[text()='Masters']").click()
    
    cy.wait(2000)
    //cy.get(".gap-\[12px\] > :nth-child(2)").click()

    cy.xpath("//h4[normalize-space()='Vendor']").click()

    cy.get('.active_tabs_bottomline').click()

    cy.wait(2000)

    cy.get('.loco-plus').click()

    cy.get("[placeholder='Enter vendor name']").type("UAT vendorF")

    cy.get("[placeholder='Enter contact person']").type("A")

    cy.get("[placeholder='Enter email']").type("admin123@gmail.com")

    cy.get("[placeholder='Enter mobile number']").type("888888888888")

    cy.get("[id='software']").click()

    cy.get("[placeholder='Enter description']").type("A")

    cy.get("[placeholder='Enter address']").type("B")

    cy.get("[data-pc-section='dropdownicon']").eq(0).click()

    cy.get("#dropdownItem_1").click()

    cy.get("[data-pc-section='dropdownicon']").eq(1).click()

    cy.get("#dropdownItem_0").click()

    cy.get("[placeholder='Enter city']").type("Tironse")

    cy.get("[placeholder='Enter zip']").type("443001")

    cy.get("[data-pc-name='button']").click()

    cy.get("[data-pc-name='button']").click()

    cy.wait(4000)

    cy.get("[alt='edit']").eq(1).click()



  })
})
