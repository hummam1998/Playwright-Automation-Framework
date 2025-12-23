import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export class ContactPage {

    constructor(private page: Page) {}

    //locators
    contactsLink = () => this.page.getByRole('link', { name: 'Contacts' });
    newButton = () => this.page.getByRole('button', { name: 'New' });
    firstNameTextField = () => this.page.getByPlaceholder('First Name');
    lastNameTextField = () => this.page.getByPlaceholder('Last Name');
    saveButton = () => this.page.getByRole('button', { name: 'Save' });
    searchBox = () => this.page.getByPlaceholder('Search this list...');
    contactFullNameLabel = () => this.page.locator('sfa-output-name-with-hierarchy-icon-wrapper');
    contactDisplayName = () => this.page.locator('#brandBand_2');
  

    //Methods

  async createNewContact(fname: string, lname:string) {
    await this.contactsLink().click();
    await this.newButton().click();
    logger.info("New button is clicked");
    await this.firstNameTextField().click();
    await this.firstNameTextField().fill(fname);
    logger.info(`First name is filled as ${fname}`)
    await this.firstNameTextField().press('Tab');
    await this.lastNameTextField().fill(lname);
    logger.info(`Last name is filled as ${lname}`)
    await this.saveButton().click().catch((error) => {
      logger.error(`Error clicking Save button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(()=>logger.info("Save Button is clicked"));
    
    
}

async expectContactLabelContainsFirstNameAndLastName(fname: string, lname:string) {
  await expect(this.contactFullNameLabel()).toContainText(`${fname} ${lname}` );
    logger.info(`New contact created and ${fname} ${lname} is visible`)
    await this.contactsLink().click();

}

async findExistingContactByLastName(lname:string) {

  await this.contactsLink().click();
  await this.searchBox().click();
  await this.searchBox().fill(lname);
  await this.searchBox().press("Enter");
  await this.page.getByRole("link", { name: lname }).click(); 
}
}