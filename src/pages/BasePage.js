class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateTo(url) {
        await this.driver.get(url);
    }

    async waitForElement(selector, timeout = 5000) {
        const element = await this.driver.wait(in.until.elementLocated(in.By.css(selector)), timeout);
        return element;
    }

    async clickElement(selector) {
        const element = await this.waitForElement(selector);
        await element.click();
    }

    async enterText(selector, text) {
        const element = await this.waitForElement(selector);
        await element.sendKeys(text);
    }

    async getElementText(selector) {
        const element = await this.waitForElement(selector);
        return await element.getText();
    }
}