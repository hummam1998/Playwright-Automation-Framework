import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import { ContactPage } from "./contact-page";


export class HomePage {

  constructor(public page: Page) { }

  //locators
  serviceTitle = () => this.page.getByTitle("Service");
  contactsLink = () => this.page.getByRole('link', { name: 'Contacts' });

  async expectServiceTitleToBeVisible() {
    await expect(this.serviceTitle()).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      logger.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(() => logger.info("Service Title is visible"));
  }


  async navigateToContactTab() {

    await expect(this.contactsLink()).toBeVisible();
    logger.info("Contacts Tab is visible")
    await this.contactsLink().click();
    logger.info("Contacts Tab is clicked")
    return new ContactPage(this.page);
  }

  //   async navigateToCaseTab(){

  //     await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
  //     //logger.info("Contacts Tab is visible")
  //     await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
  //     //logger.info("Contacts Tab is clicked")
  //    // return new ContactPage(this.page);

  //   }
}