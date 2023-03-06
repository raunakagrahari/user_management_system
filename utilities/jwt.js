const { UnauthorizedException } = require('./../helpers/errorResponse');
const jwt = require('jsonwebtoken');

exports.verifyToken = (token, source) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'jwtsecrettoken', (err, decoded) => {
            if (err) throw new UnauthorizedException( 'Invalid token!');
            if (decoded.source !== source) throw new UnauthorizedException('Invalid token source!');
            resolve(decoded);
        });
    });
};

exports.generateAccessToken = (payload) => {
    return jwt.sign({ ...payload, source:  'access-token' },  'jwtsecrettoken', {
        expiresIn: '90d',
    });
};