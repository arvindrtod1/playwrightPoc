// LoginPage.js

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
    }

    async enterUsername(username) {
        await this.driver.findElement(By.css(this.usernameInput)).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(By.css(this.passwordInput)).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(By.css(this.loginButton)).click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = new LoginPage(driver);