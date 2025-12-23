import { Page, expect } from "@playwright/test";
import { HomePage } from "./home-page";
import logger from "../utils/LoggerUtil";


export class LoginPage {

    constructor(public page: Page) { }

    //locators
    username = () => this.page.getByRole('textbox', { name: 'Username' });
    password = () => this.page.getByRole('textbox', { name: 'Password' });
    loginButton = () => this.page.getByRole('button', { name: 'Log In' });

    async quickLogin(username: string, password: string) {
        await this.navigateToLoginPage();
        await this.fillUsername(username);
        await this.fillPassword(password);
        return await this.clickLoginButton();
    }

    async navigateToLoginPage() {
        await this.page.goto("/");
        // logger.info("Navigated to login.salesforce.com");
    }

    async fillUsername(username: string) {
        await this.username().fill(username);
        //logger.info("Filled username");
    }

    // async fillUsername_selfheal(username: string) {
    //     let usernameInputLocator = await findValidElement(this.page, this.usernameInputSelectors);
    //     await usernameInputLocator?.fill(username);
    //     const enteredValue = await usernameInputLocator?.inputValue();
    //     expect(enteredValue).toBe(username);

    // }

    async fillPassword(password: string) {
        await this.password().fill(password);
        //logger.info("Filled pasword");
    }

    async clickLoginButton() {
        await this.loginButton().click().catch((error) => {
             logger.error(`Error clicking login button: ${error}`);
            throw error; // rethrow the error if needed
        }).then(() => logger.info("Clicked login button"));

        const homePage = new HomePage(this.page);
        return homePage;
    }
          
}