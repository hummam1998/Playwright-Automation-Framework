import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export class CasePage {

    constructor(private page: Page) { }

    // Locators
    caseLink = () => this.page.getByLabel("Cases");
    newButton = () => this.page.getByRole("button", { name: "New" });
    caseOriginDropdown = () => this.page.getByLabel("Case Origin - Current");
    caseProductDropdown = () => this.page.getByLabel("Product - Current Selection");
    caseTypeDropdown = () => this.page.getByLabel("Type - Current Selection: --");
    saveButton = () => this.page.getByRole("button", { name: "Save", exact: true });
    contactFullNameLabel = () => this.page.locator(".sfa-output-name-with-hierarchy-icon-wrapper");

    // Methods
    async createNewCaseFromContactDetailPage(caseOrigin: string, productName: string, caseType: string) {

        //test should be in Contact Detail page
        await this.caseLink().click();
        await this.newButton().click();
        await this.caseOriginDropdown().click();
        await this.page
            .getByRole("option", { name: caseOrigin })
            .locator("span")
            .nth(1)
            .click();
        await this.caseProductDropdown().click();
        await this.page
            .getByRole("option", { name: productName })
            .locator("span")
            .nth(1)
            .click();
        await this.caseTypeDropdown().click();
        await this.page
            .getByRole("option", { name: caseType })
            .locator("span")
            .nth(1)
            .click();
        await this.saveButton().click();

    }
}