describe('template spec', () => {
  
   it('Maintenace_Add External', () => {

    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx 
    cy.xpath('//input[@id="username"]',{ timeout: 10000 })
    .should('be.visible').type('admin@gmail.com');
    cy.xpath("//input[@placeholder='Password']").type("123456")
    cy.xpath("//div[text()='Login']").click()

    cy.wait(5000) 

    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/common/maintenance")  

    cy.get('.loco-plus').click()

    cy.wait(2000)

    cy.get("[placeholder='Type Here']").type("UAT Maintenace add check")

    cy.get("[data-pc-name='button']").eq(0).click()

    cy.get("[class='p-datepicker-today']").click()

    cy.get("[data-pc-name='button']").eq(1).click()

    cy.get("[data-pc-section='daylabel']").eq(31).click()

    cy.get("[class='p-icon p-dropdown-trigger-icon p-clickable']").eq(1).click()//Clicking Maintainance Type

    cy.get("#dropdownItem_1").click()// External Selected

    cy.wait(1000)

    cy.get("[class='p-icon p-dropdown-trigger-icon p-clickable']").eq(1).click()//Clicking Vendor Dropdown

    cy.get("#dropdownItem_1").click()// First vendor selected

    cy.wait(2000)


    cy.get("[placeholder='Type Here']").eq(1).type("Remarks Sample")

    cy.get('.loco-plus').click()//Add Asset

    cy.get("[data-pc-section='trigger']").eq(6).click()

    cy.get("#dropdownItem_0").click()

    cy.get("[data-pc-section='trigger']").eq(7).click()

    cy.get("#dropdownItem_0").click()

    cy.wait(2000)

    cy.get("[data-pc-section='trigger']").eq(8).click()

    cy.get("#dropdownItem_0").should('contain.text', 'Computer').click();
    cy.log("The element found as expected!")
 
    cy.xpath("//button[text()='Apply']").click()

    cy.wait(2000)

    cy.get('input.p-checkbox-input').eq(2).should('exist').click({ force: true });
    cy.log("Element is present")

    cy.get(".loco-plus").eq(1).click()


    cy.xpath("//button[text()='Submit']").eq(1).click()


    cy.get('.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter')
    .parent() // Typically the toast container
    .should('contain', 'Selected Assets Added')
    .and('be.visible');
    cy.log("The toaster is correct!")

    cy.wait(1000)
    
    cy.xpath("//button[text()='Submit']").click()

    cy.wait(2000)

    cy.xpath("//button[text()='Submit']").eq(1).click()

   
    
   })

})