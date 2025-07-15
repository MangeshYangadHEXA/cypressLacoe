describe('template spec', () => {
  it('test title', () => {
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai')
    cy.title().should('eq','LACOE | User Login')

  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Add location', () => {
    // 1. Visit the base URL of your application or the page where the menu exists
    // (Adjust this if you need to perform login first)
    cy.visit('https://lacoe.hexalytics.ai/'); // This will go to https://lacoe.hexalytics.ai/ based on baseUrl

    cy.xpath('//input[@id="username"]',{ timeout: 2000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(3000) 

    cy.xpath("//i[@class='loco-arrow-right-outline text-[#C9D0DB] text-[18px] 3xl:text-[0.938vw]']").click()

     //l̥cy.xpath("(//a[text()='Manage'])[5]").click()

    cy.visit('https://lacoe.hexalytics.ai/admin/location');

    cy.get('.loco-plus').click()
    cy.wait(2000)
    
    cy.xpath("//input[@placeholder='Enter  Location/Room Code']").type('F')

    cy.xpath("//input[@placeholder='Enter  Location/Room Title']").type('T')

    cy.get("[data-pc-section='dropdownicon']").eq(0).click()
    cy.get("#dropdownItem_2").click()
  
    cy.wait(2000)
    cy.get("[data-pc-section='dropdownicon']").eq(1).click()
    cy.get("#dropdownItem_0").click()

    cy.wait(2000)
    cy.get("[data-pc-section='dropdownicon']").eq(2).click()
    cy.get("#dropdownItem_0").click()

    //cy.xpath("//span[text()='Admin LACOE (STF-1)']").click()


    })


})



