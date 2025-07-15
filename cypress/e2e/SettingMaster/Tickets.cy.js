describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Ticket add', () => {

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

    cy.xpath("//h4[normalize-space()='Tickets']").click()

    cy.get(".loco-plus").click()

    cy.get("[placeholder='Category title']").type("Test category")

    cy.get("[placeholder='Please enter to add multiple items']").type("K")

    //cy.get("[data-pc-name='button']").click()    ////click save

    cy.get('.loco-close').click()

    cy.xpath("//div[text()='Sub-Category']").click()

    cy.get('.loco-plus').click()

    cy.get("[placeholder='Enter Subcategory']").type("TestSub")

    cy.get("[data-pc-section='dropdownicon']").click()

    cy.get("#dropdownItem_1").click()

    cy.get("#subCategory").click()

    //cy.get("[data-pc-name='button']").click()       ////click save

    cy.get("[class='loco-close text-xs']").click()

    cy.xpath("//div[text()='Ticket Priority']").click()

    cy.get(".loco-plus").click()

    cy.get("[placeholder='Enter Priority']").type("Highest")

    //cy.get("[data-pc-name='button']").click()         ////click save    

    cy.get("[class='loco-close text-xs']").click()

    cy.xpath("//div[text()='Resolution Code']").click()

    cy.get(".loco-plus").click()

    cy.get("[placeholder='Enter Title']").type("Test code")

    //cy.get("[data-pc-name='button']").click()          ////click save    

    cy.get("[class='loco-close text-xs']").click()

  })
})
