import express from 'express';
import * as authController from '../controllers/auth.controller';
import * as authValidation from '../validations/auth.validation';
import validate from '../middleware/validate';

const router = express.Router();

router.post('/login', validate(authValidation.login), authController.authUser);
router.post('/loginfg', validate(authValidation.loginfg), authController.authUserFG);
router.post('/register', validate(authValidation.register), authController.registerUser);

export default router;
