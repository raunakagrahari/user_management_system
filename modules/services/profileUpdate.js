const userRepository = require('../user.repository');
const { BadRequestException } = require('../../helpers/errorResponse');


module.exports = async (id, data) => {
  let userExits = await userRepository.getUserDetailsById(id);

  if (!userExits) throw new BadRequestException('Invalid user');

  await userRepository.updateUser(data,id);
 
  return 'profile Updated';
};
