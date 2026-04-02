// AddEmployeePage.js

class AddEmployeePage {
    constructor() {
        this.firstNameField = '#first-name';
        this.lastNameField = '#last-name';
        this.employeeIdField = '#employee-id';
        this.saveButton = '#btnSave';
    }

    enterFirstName(firstName) {
        $(this.firstNameField).setValue(firstName);
    }

    enterLastName(lastName) {
        $(this.lastNameField).setValue(lastName);
    }

    enterEmployeeId(employeeId) {
        $(this.employeeIdField).setValue(employeeId);
    }

    clickSave() {
        $(this.saveButton).click();
    }

    addEmployee(firstName, lastName, employeeId) {
        this.enterFirstName(firstName);
        this.enterLastName(lastName);
        this.enterEmployeeId(employeeId);
        this.clickSave();
    }
}

module.exports = new AddEmployeePage();
