describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Quick add', () => {
    // 1. Visit the base URL of your application or the page where the menu exists
    // (Adjust this if you need to perform login first)
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will go to https://lacoe.hexalytics.ai/ based on baseUrl

    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 

    //cy.xpath("//i[@class='loco-arrow-right-outline text-[#C9D0DB] text-[18px] 3xl:text-[0.938vw]']").click()
    
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/asset/quickadd")

    cy.wait(2000)

    cy.get("[data-pc-section='trigger']").eq(2).click()

    cy.get("#dropdownItem_0").click()

    cy.wait(2000)

    cy.get("[data-pc-section='trigger']").eq(3).click()
    
    cy.get("#dropdownItem_0").click()


    cy.get("[data-pc-section='trigger']").eq(5).click()

    cy.get("#dropdownItem_0").click()


    cy.wait(2000)
    cy.get("[data-pc-section='trigger']").eq(6).click()

    cy.get("#dropdownItem_0").click()

    cy.get("[class='custInput']").eq(2).type("Desc")

    //cy.get("[data-pc-name='button']").click()



  })

})