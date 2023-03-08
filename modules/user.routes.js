const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const { validationMiddleware, authMiddleware } = require('./../middlewares');
const { signUpSchema, loginSchema } = require('./user.validation');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  },
})
const upload = multer({ storage });

router.post('/signup',validationMiddleware(signUpSchema) ,userController.signUp );
router.post('/login',authMiddleware(['user']), validationMiddleware(loginSchema), userController.login);
router.patch('/updateProfileImage/:id', authMiddleware(['user']), upload.single('file'),  userController.updateProfileImage);
router.patch('/updateProfile/:id', authMiddleware(['user']), userController.updateProfile);
router.post('/logout/:id', authMiddleware(['user']), userController.logout);


module.exports = router;