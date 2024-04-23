exports.dashboardpage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardheading = page.locator('.col-12.dashboard-name-box');
        this.dashboardsetting = page.locator('.desktop-menu--item-icons').nth(1);
        this.settingpayment = page.getByRole('button', { name: 'Payment' });
        this.paywithsavedcard = page.locator('div:nth-child(2) > div > .col-12 > .payment-method-box > .row');
        this.cardActiveBtn = page.locator('.q-toggle');
        this.addfundsBtn = page.getByRole('button').nth(2);
        this.enterAmount = page.locator('.q-field__native.q-placeholder');
        this.chckBox = page.locator('.q-checkbox__svg.fit.absolute-full');
        this.paywithsaveBtn = page.locator('.text-ten');
        this.paymentMsg = page.locator('.q-notification__message.col');
    }

    async activateCardIfInactive() {
        const toggleButton = await this.cardActiveBtn.first();
        if (toggleButton) {
            const isInactive = await toggleButton.getAttribute('aria-checked') === 'false';
            if (isInactive) {
                await toggleButton.click();
                console.log('Card activated!');
            } else {
                console.log('Card is already active.');
            }
        } else {
            console.log('Toggle button not found.');
        }
    }

    async enterAmountAndAddFunds(amount) {
        await this.enterAmount.fill(amount);
        await this.chckBox.click()
        await this.paywithsaveBtn.click()
    }
}
