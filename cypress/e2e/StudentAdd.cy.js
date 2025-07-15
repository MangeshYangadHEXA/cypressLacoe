
describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('student add', () => {
    // 1. Visit the base URL of your application or the page where the menu exists
    // (Adjust this if you need to perform login first)
    cy.visit('https://lacoe.hexalytics.ai/'); // This will go to https://lacoe.hexalytics.ai/ based on baseUrl

    cy.xpath('//input[@id="username"]',{ timeout: 4000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 

    //cy.xpath("//i[@class='loco-arrow-right-outline text-[#C9D0DB] text-[18px] 3xl:text-[0.938vw]']").click()
    
    cy.visit("https://lacoe.hexalytics.ai/admin/students")

    cy.get("[class='loco-plus']").click()

    cy.get("[placeholder='First Name']").type('Joe')

    cy.get("[placeholder='Middle Name']").type('C')

    cy.get("[placeholder='Last Name']").type('Stone')
     
    cy.get("[placeholder='Email Id']").type('joestone@gmail.com')

    cy.xpath("//button[text()='Next']").click()

    cy.wait(1000)

    cy.get("[class='p-dropdown-trigger']").eq(0).click()

    cy.get("#dropdownItem_1").click()
    
    cy.wait(2000)
    cy.get("[class='p-dropdown-trigger']").eq(1).click()

    cy.wait(2000)
    cy.get("#dropdownItem_2").click()

    cy.get("[class='p-dropdown-trigger']").eq(2).click()

    cy.get("#dropdownItem_1").click()

    cy.xpath("//button[text()='Next']").click()

    cy.wait(2000)
    cy.xpath("//button[text()='Next']").click()

    cy.get("[data-pc-name='button']").click()


  })
})
