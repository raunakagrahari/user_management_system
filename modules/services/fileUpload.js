const fs = require('fs');
const userRepository = require('../user.repository');
const { BadRequestException } = require('../../helpers/errorResponse');

module.exports = async (id, file) => {

    let userExits = await userRepository.getUserDetailsById(id);

    if (!userExits) throw new BadRequestException('Invalid user');

    var imageAsBase64 = fs.readFileSync(file, 'base64');
    
    await userRepository.updateUser({
        profilePicUrl: imageAsBase64,
      },id);

    return 'profile pic data updated';

};
