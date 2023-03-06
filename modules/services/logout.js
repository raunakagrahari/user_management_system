const userRepository = require('../user.repository');
const { BadRequestException } = require('../../helpers/errorResponse');


module.exports = async (id ) => {
  let userExits = await userRepository.getUserDetailsById(id);

  if (!userExits) throw new BadRequestException('Invalid user');

  await userRepository.updateUser({
    accessToken: ' ',
    isLogin: false
  },id);
 
  return 'successfully Logged Out!';
};
