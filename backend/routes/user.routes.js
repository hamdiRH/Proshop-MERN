import express from 'express';
import * as userController from '../controllers/user.controller';
import * as userValidation from '../validations/user.validation';
import validate from '../middleware/validate';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/login', validate(userValidation.login), userController.authUser);
router.post('/login', validate(userValidation.register), userController.registerUser);
router.get('/profile', auth, userController.getUserProfile);

export default router;

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: CRUD users
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: CRUD users
 */

/**
 * @swagger
 * path:
 *  /user/login:
 *    post:
 *      summary: Login
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                password:
 *                  type: string
 *                  format: password
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: '#/components/schemas/User'
 *        "401":
 *          description: Invalid email or password
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                code: 401
 *                message: Invalid email or password
 */

/**
 * @swagger
 * path:
 *  /user/profile:
 *    get:
 *      summary: Get profile
 *      description: get profile
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/User'
 * */
