// PageManager.js

class PageManager {
    constructor() {
        this.pageObjects = {};
    }

    getPage(pageName) {
        if (!this.pageObjects[pageName]) {
            switch (pageName) {
                case 'LoginPage':
                    this.pageObjects[pageName] = new (require('./LoginPage'))();
                    break;
                case 'HomePage':
                    this.pageObjects[pageName] = new (require('./HomePage'))();
                    break;
                // Add other pages as needed
                default:
                    throw new Error(`Page ${pageName} is not defined.`);
            }
        }
        return this.pageObjects[pageName];
    }
}

module.exports = PageManager;