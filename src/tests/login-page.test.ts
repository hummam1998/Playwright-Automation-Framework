import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test("Login Page - Valid Credentials", async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();

    await loginPage.fillUsername("hummamhabib484@agentforce.com");
    await loginPage.fillPassword("munited997");
    const homePage = await loginPage.clickLoginButton();
    
    await page.waitForTimeout(20000); // 3 seconds

    // Assert
    await expect(homePage.serviceTitle()).toBeVisible();
    // logger.info("Login successful, Service title is visible on Home Page");
});