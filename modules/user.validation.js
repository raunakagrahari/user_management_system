const Joi = require('joi');

exports.signUpSchema = {
    body: Joi.object().keys({
        userName: Joi.string()
            .trim()
            .regex(/^[a-z A-Z]+$/, 'Please Enter Valid Name')
            .min(3)
            .max(15)
            .required(),
        email: Joi.string().trim().lowercase().email().required(),
        password: Joi.string()
            .min(8)
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/, 'Must have at least 1 uppercase, 1 lowercase letter and 1 number')
            .required(),
    }),
};

exports.loginSchema = {
    body: Joi.object().keys({
        email: Joi.string().trim().lowercase().email().required(),
        password: Joi.string()
            .min(8)
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/, 'Must have at least 1 uppercase, 1 lowercase letter and 1 number')
            .required(),
    }),
};