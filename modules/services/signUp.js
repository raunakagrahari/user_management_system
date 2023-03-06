const userRepository = require('../user.repository');
const { bcrypt, jwt } = require('../../utilities');

module.exports = async (data) => {
    const { userName, email, password } = data;

    const hash = await bcrypt.generatePassword(password);
    const user = { userName, email, password: hash, isLogin: false };
    const response = await userRepository.createUser(user);

    const tokenPayload = {
        id: response.id,
        role: 'user',
    };

    const accessToken = jwt.generateAccessToken(tokenPayload);
    const responsePayload = {
        id: response.id,
        userName: userName,
        email: email,
        accessToken
    };

    return responsePayload;
};
