const { Users } = require('../models');

exports.createUser = (user) => {
    return Users.create(user);
};

exports.findUserByEmailNormal = (email) => {
    return Users.findOne({
        where: {
            email,
        },
    });
};

exports.updateUser = (user, id) => {
    return Users.update(user, {
        where: {
            id,
        },
    });
};

exports.getUserDetailsById = async (id) => {
    return await Users.findOne({
        where: {
            id,
        },
    });
};