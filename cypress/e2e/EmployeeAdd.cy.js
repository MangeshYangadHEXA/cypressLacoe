
describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('Employee add', () => {
    // 1. Visit the base URL of your application or the page where the menu exists
    // (Adjust this if you need to perform login first)
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will go to https://lacoe.hexalytics.ai/ based on baseUrl

    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 

    //cy.xpath("//i[@class='loco-arrow-right-outline text-[#C9D0DB] text-[18px] 3xl:text-[0.938vw]']").click()
    
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/employee")

    cy.get(".loco-plus").click()

    cy.wait(3000)

    cy.get("[class='p-dropdown-trigger']").click()

    cy.get('#dropdownItem_2 > .p-dropdown-item-label').click()
    
    cy.get("[placeholder='First Name']").type('Joe')

    cy.get("[placeholder='Middle Name']").type('C')

    cy.get("[placeholder='Last Name']").type('Stone')
     
    cy.get("[placeholder='Email']").type('joestone@gmail.com')

    cy.xpath("//a[text()='Next']").click()

    cy.wait(2000)

    cy.xpath("//a[text()='Next']").click()
    
    cy.wait(3000)
    cy.scrollTo(0, 500);
    cy.get("[class='p-dropdown-label p-inputtext p-placeholder']").eq(0).click()
    
    cy.get("#dropdownItem_1").click()
    
    cy.wait(2000)
    cy.get(':nth-child(2) > .custDropdown > .w-full > .p-dropdown-trigger').click()
    cy.get("#dropdownItem_1").click()


    //cy.get("[data-pc-name='button']").click()


  })
})
