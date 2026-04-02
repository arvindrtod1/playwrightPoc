// commonActions.js

/**
 * Performs common actions for page interactions.
 */

class CommonActions {
    constructor(page) {
        this.page = page;
    }

    /**
     * Clicks on an element.
     * @param selector - The selector for the element to click.
     */
    async click(selector) {
        await this.page.click(selector);
    }

    /**
     * Enters text into an input field.
     * @param selector - The selector for the input field.
     * @param text - The text to enter.
     */
    async type(selector, text) {
        await this.page.fill(selector, text);
    }

    /**
     * Checks if an element is visible.
     * @param selector - The selector for the element.
     * @returns {Promise<boolean>} - True if the element is visible, false otherwise.
     */
    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }
}

module.exports = CommonActions;