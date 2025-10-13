describe('template spec', () => {
 it('Test Start', () => {

 })


it('test title', () => {
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai')
cy.title().should('eq','LACOE | User Login')

  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});


  it('test AddAsset', () => {
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai');

  cy.xpath('//input[@id="username"]',{ timeout: 4000 })
  .should('be.visible').type('admin@gmail.com');
  cy.xpath("//input[@placeholder='Password']").type("123456")
  cy.xpath("//div[text()='Login']").click()
  
  cy.wait(3000)
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/admin/assetlist');
 
  cy.xpath("(//span[text()='Add New'])[2]").click
  cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/assetlist/adminaddasset")
  cy.xpath("(//div[@class='p-dropdown-trigger'])[3]").click()
  cy.wait(2000)
  cy.get("[aria-label='Hardware']").click()
  cy.wait(3000)


  // cy.get(".p-dropdown-filter.p-inputtext.p-component']", { offset: 10 }).type('Hardware')
  // cy.xpath("//input[@class='p-dropdown-filter p-inputtext p-component']").type('Hardware')
  // cy.xpath("//span[normalize-space()='Innive Asset Category(Testing)']").click

  // cy.get('#dropdownItem_0').dispatchEvent(new MouseEvent('click'))
  //cy.get('.p-dropdown-filter.p-inputtext.p-component').type('Hardware')

  // cy.get('[formcontrolname="category"]').click();
  // cy.get('.p-dropdown-panel .p-dropdown-item')
  // .contains('Hardware')
  // .click();


  
  // // 1. Click the "Category" dropdown to open options
  // cy.get('[formcontrolname="category"]').click();

  // // 2. Wait for dropdown panel to be visible
  // cy.get('.p-dropdown-panel').should('be.visible');

  // // 3. Click the desired option inside dropdown
  // cy.contains('.p-dropdown-panel .p-dropdown-item', 'Hardware').click();

  // cy.get('.p-dropdown-item') // Select li elements with class p-dropdown-item
  // .contains('Hardware') // Find the one with text "Hardware"
  // .click();
  
  cy.xpath("(//div[@class='p-dropdown-trigger'])[4]").click()
  cy.get("[aria-label=Computer]").click()
  
  cy.wait(2000)
  cy.xpath("(//div[@class='p-dropdown-trigger'])[5]").click()
  cy.wait(2000)
  cy.get("[aria-label='Apple']").click()
  
  cy.wait(2000)
  cy.xpath("(//div[@class='p-dropdown-trigger'])[6]").click()
  cy.get("[aria-label='Apple 15']").click()

  cy.wait(2000)
  cy.xpath("(//div[@class='p-dropdown-trigger'])[7]").click()
  cy.get("#dropdownItem_2").click()

  cy.scrollTo('bottom');

  cy.get("[data-pc-name='button']").click()
  
  cy.xpath("(//div[@class='p-dropdown-trigger'])[3]").click()

  cy.get("#dropdownItem_1").click()

  cy.xpath("//button[text()='Next']").click()

  cy.xpath("//div[@class='p-dropdown-trigger']").click()

  cy.xpath("//span[text()='Global Solution']").click()
   
  cy.xpath("//button[text()='Next']").click()
  
  cy.xpath("//button[text()='Next']").click()

  cy.xpath("//button[text()='Next']").click()

  cy.xpath("//button[text()='Next']").click()

  cy.xpath("//button[text()='Submit']").click()

  })
  
 
  it('test EditAsset', () => {
  
  cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');

  cy.xpath('//input[@id="username"]',{ timeout: 4000 })
  .should('be.visible').type('admin@gmail.com');
  cy.xpath("//input[@placeholder='Password']").type("123456")
  cy.xpath("//div[text()='Login']").click()
  
  cy.wait(4000)  

   cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/assetlist");
    
   cy.wait(3000)
   cy.get("[title='Edit']").eq(0).click()

   cy.wait(2000)
   cy.xpath("//div/h6[text()='More Information']").click()
   
   cy.wait(2000)
   cy.xpath("//button[text()='Update']").click()


  })

 })


