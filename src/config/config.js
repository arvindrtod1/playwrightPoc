// Configuration management for different environments

const config = {
    development: {
        apiUrl: 'https://dev.api.example.com',
        debug: true,
    },
    testing: {
        apiUrl: 'https://test.api.example.com',
        debug: false,
    },
    production: {
        apiUrl: 'https://api.example.com',
        debug: false,
    }
};

const getConfig = (env) => {
    return config[env] || config.development;
};

module.exports = getConfig;
