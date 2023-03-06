
class UnauthorizedException extends Error {
    constructor(message) {
        super(message);
        this.type = 'Unauthorized';
        this.statusCode = '401';
    }
}

module.exports = UnauthorizedException;
