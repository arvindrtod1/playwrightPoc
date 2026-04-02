class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomException";
    }
}

class NotFoundException extends CustomException {
    constructor(message = "Not Found") {
        super(message);
        this.name = "NotFoundException";
    }
}

class ValidationException extends CustomException {
    constructor(message = "Validation Error") {
        super(message);
        this.name = "ValidationException";
    }
}

module.exports = { CustomException, NotFoundException, ValidationException };