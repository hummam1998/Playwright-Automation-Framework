import { Page, expect } from "@playwright/test";


export class HomePage {

    //locators
    serviceTitle = () => this.page.getByTitle("Service");
    contactsLink = () => this.page.getByRole('link', { name: 'Contacts' });

  constructor(public page: Page) {}

//   async expectServiceTitleToBeVisible() {
//     await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({
//       timeout: 15000,
//     }).catch((error) => {
//      // logger.error(`Error clicking login button: ${error}`);
//       throw error; // rethrow the error if needed
//     }).then(()=>logger.info("Service Title is visible"));
//   }


//   async navigateToContactTab(){

//     await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
//    // logger.info("Contacts Tab is visible")
//     await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
//     //logger.info("Contacts Tab is clicked")
//    // return new ContactPage(this.page);
    
//   }

//   async navigateToCaseTab(){

//     await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
//     //logger.info("Contacts Tab is visible")
//     await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
//     //logger.info("Contacts Tab is clicked")
//    // return new ContactPage(this.page);
    
//   }
}