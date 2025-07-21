describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Disposal add', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 
 
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/common/disposal")

    cy.wait(1000)

    cy.get(".loco-plus").click()
    
    cy.get("[data-pc-section='dropdownicon']").eq(2).click()

    cy.get("#dropdownItem_0").click()

    cy.wait(1000)

   cy.get("[data-pc-section='dropdownicon']").eq(4).click()
   
   cy.get("#dropdownItem_0").click()

   cy.get("[data-pc-section='dropdownicon']").eq(5).click()

   cy.get("#dropdownItem_0").click()

   cy.get("[data-pc-section='dropdownicon']").eq(6).click()

   cy.get("#dropdownItem_0").click()

   cy.get("[data-pc-section='dropdownicon']").eq(7).click()
  
   cy.get("#dropdownItem_0").click()
    //cy.xpath("//button[contains(@type,'submit')]").click()
    
   cy.wait(3000)

   cy.xpath("//button[text()='Apply']").click()

   cy.get("[type='checkbox']").click()

   cy.wait(3000)

   cy.get(".loco-plus").click()
   
   cy.xpath("//a[text()='Preview']").click()

   cy.wait(3000)

   cy.get("[title='Scroll right']").click()

   cy.wait(1000)

   cy.get("[placeholder='00.00']").type(56.70)

   cy.get("[data-pc-name='inputtext']").eq(3).type("Intel")

   //cy.xpath("//button[text()='Dispose']").click()

  })
})
