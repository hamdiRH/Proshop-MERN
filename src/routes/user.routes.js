import express from 'express';
import * as userController from '../controllers/user.controller';
import * as userValidation from '../validations/user.validation';
import validate from '../middleware/validate';
import { auth, admin } from '../middleware/auth';

const router = express.Router();

router.get('/', auth, admin, userController.getAllUsers);
router
  .route('/profile')
  .get(auth, userController.getUserProfile)
  .put(auth, validate(userValidation.updateProfile), userController.updateProfile);

router
  .route('/:id')
  .get(auth, admin, validate(userValidation.userId), userController.getUserById)
  .delete(auth, admin, validate(userValidation.userId), userController.deleteUserById)
  .put(auth, admin, validate(userValidation.updateUser), userController.updateUserById);

export default router;
