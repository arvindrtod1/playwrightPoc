// addEmployee.spec.js

const { test, expect } = require('@playwright/test');

// Sample test suite for adding an employee

test.describe('Add Employee Tests', () => {

    test('should add a new employee successfully', async ({ request }) => {
        const response = await request.post('/api/employees', {
            data: {
                name: 'John Doe',
                position: 'Software Engineer',
                department: 'Engineering'
            }
        });

        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.name).toBe('John Doe');
    });

    test('should fail to add an employee with missing fields', async ({ request }) => {
        const response = await request.post('/api/employees', {
            data: {
                name: '', // Missing name
                position: 'Software Engineer',
                department: 'Engineering'
            }
        });

        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.error).toBe('Name is required');
    });

});
