// EmployeeListPage.js

class EmployeeListPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToEmployeeList() {
        await this.page.click('text=Employee List');
        await this.page.waitForSelector('.employee-list');
    }

    async getEmployeeNames() {
        const employeeNames = await this.page.$$eval('.employee-name', names => names.map(name => name.innerText));
        return employeeNames;
    }

    async filterEmployees(searchTerm) {
        await this.page.fill('input#employee-search', searchTerm);
        await this.page.click('button#search-button');
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = EmployeeListPage;