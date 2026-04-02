// Custom wait utilities and timeout handlers

/**
 * Custom wait utility to delay execution for a given time.
 * @param {number} ms - Milliseconds to wait.
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Waits for a specific condition to be met within a timeout.
 * @param {Function} condition - Function that returns true when the condition is met.
 * @param {number} ms - Timeout in milliseconds to wait for the condition.
 */
async function waitForCondition(condition, ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        if (condition()) {
            return true;
        }
        await wait(100); // Check every 100ms
    }
    throw new Error('Condition was not met within the timeout.');
}

module.exports = { wait, waitForCondition };