const userRepository = require('../user.repository');
const { BadRequestException } = require('../../helpers/errorResponse');
const { jwt, bcrypt } = require('../../utilities');

module.exports = async (email, password) => {
  let userExits = await userRepository.findUserByEmailNormal(email.toLowerCase());

  if (!userExits) throw new BadRequestException('Invalid Email or Password');

  const validPassword = await bcrypt.verifyPassword(password, userExits.password);

  if (!validPassword) throw new BadRequestException('Please try again or use forgot your password.');

  const tokenPayload = {
    id: userExits.id,
    role: 'user'
  };

  const accessToken = jwt.generateAccessToken(tokenPayload);
  await userRepository.updateUser(
    {
        accessToken: accessToken,
        isLogin: true
    },
    userExits.id
  )
  return {
    id: userExits.id,
    userName: userExits.userName,
    email: userExits.email,
    accessToken,
  };
};
