const winston = require('winston');

// Create a logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        // Console transport
        new winston.transports.Console(),
        // File transport
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

module.exports = logger;