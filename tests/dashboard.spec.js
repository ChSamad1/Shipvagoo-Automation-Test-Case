const { test, expect } = require('@playwright/test');
const { loginPage } = require('c:/Shipvagoo Automation Test Case/pages/login.page')
const { dashboardpage } = require('c:/Shipvagoo Automation Test Case/Pages/dashboard.page');
const staticData = require('c:/Shipvagoo Automation Test Case/data/staticData')

test('Dashboard Validation', async ({ page }) => {
    
    const login = new loginPage(page);
    await login.gotoLoginPage();
    await expect(login.logo).toBeVisible();
    await login.Login(staticData.email, staticData.password);
    await login.updateButton.click();

    // Dashboard Page
    const dashboard = new dashboardpage(page);
    await expect(dashboard.dashboardheading).toBeVisible();
    await dashboard.dashboardsetting.hover();
    await dashboard.settingpayment.click();
    await dashboard.activateCardIfInactive();
    await dashboard.paywithsavedcard.click();
    await dashboard.addfundsBtn.click();
    await dashboard.enterAmountAndAddFunds('100');
    await dashboard.chckBox.click();
    await dashboard.paywithsaveBtn.click();
    await page.waitForSelector('.q-notification__message.col');
    await expect(dashboard.paymentMsg).toBeVisible();
});
