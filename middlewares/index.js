const validationMiddleware = require('./validation');
const authMiddleware = require('./authorization');

module.exports = {
    validationMiddleware,
    authMiddleware
};
