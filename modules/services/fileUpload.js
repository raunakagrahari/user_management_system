const fs = require('fs');
const userRepository = require('../user.repository');
const { BadRequestException } = require('../../helpers/errorResponse');

module.exports = async (id, filePath, mimetype) => {

    let userExits = await userRepository.getUserDetailsById(id);

    if (!userExits) throw new BadRequestException('Invalid user');

    var bitmap = fs.readFileSync(filePath);
    imageAsBase64 = `data:${mimetype};base64,` + new Buffer.from(bitmap).toString('base64');
    
    await userRepository.updateUser({
        profilePicUrl: imageAsBase64,
      },id);

    return 'profile pic data updated';

};
