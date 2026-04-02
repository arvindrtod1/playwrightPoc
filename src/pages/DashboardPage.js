// DashboardPage.js

class DashboardPage {
    constructor() {
        this.url = 'https://example.orangehrm.com/dashboard';
    }

    navigate() {
        cy.visit(this.url);
    }

    getHeader() {
        return cy.get('h1.header');
    }

    getSideMenu() {
        return cy.get('.side-menu');
    }

    getLogoutButton() {
        return cy.get('#logout');
    }
}

export default new DashboardPage();