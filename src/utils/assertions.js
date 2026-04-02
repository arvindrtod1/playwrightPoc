// Custom Assertion Helper Methods

/**
 * Checks if the provided value is truthy.
 * @param {any} value - The value to check.
 * @throws {Error} If the value is falsy.
 */
const assertTruthy = (value) => {
    if (!value) {
        throw new Error('Assertion failed: Value is not truthy.');
    }
};

/**
 * Checks if two values are strictly equal.
 * @param {any} actual - The actual value.
 * @param {any} expected - The expected value.
 * @throws {Error} If the values are not equal.
 */
const assertEqual = (actual, expected) => {
    if (actual !== expected) {
        throw new Error(`Assertion failed: ${actual} is not equal to ${expected}.`);
    }
};

/**
 * Checks if an object contains a specific key.
 * @param {Object} obj - The object to check.
 * @param {string} key - The key to check for.
 * @throws {Error} If the key is not present in the object.
 */
const assertHasKey = (obj, key) => {
    if (!obj.hasOwnProperty(key)) {
        throw new Error(`Assertion failed: Key '${key}' is not present in the object.`);
    }
};

module.exports = {
    assertTruthy,
    assertEqual,
    assertHasKey,
};