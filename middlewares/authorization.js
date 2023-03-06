const { UnauthorizedException } = require('../helpers/errorResponse');
const { jwt } = require('../utilities');

module.exports =
    (allowedRoles = []) =>
    async (req, res, next) => {
        try {
            if (!req.headers.authorization) throw new UnauthorizedException('Missing authorization header!');

            const token = req.headers.authorization.split(' ')[1]; // Extracting Bearer token from header.

            if (!token) throw new UnauthorizedException('Missing access token!');

            const decoded = await jwt.verifyToken(token, 'access-token' );

            if (allowedRoles.includes(decoded.role)) {
                req.user = decoded;
                next();
            } else {
                throw new UnauthorizedException('Invalid access token!');
            }
        } catch (error) {
            next(error);
        }
    };
