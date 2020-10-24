import express from 'express';
import * as userController from '../controllers/user.controller';
import * as userValidation from '../validations/user.validation';
import validate from '../middleware/validate';
import { auth, admin } from '../middleware/auth';

const router = express.Router();

router.post('/login', validate(userValidation.login), userController.authUser);
router.post('/register', validate(userValidation.register), userController.registerUser);
router
  .route('/profile')
  .get(auth, userController.getUserProfile)
  .put(auth, validate(userValidation.updateProfile), userController.updateProfile);

router.get('/', auth, admin, userController.getAllUsers);
router.get('/:id', auth, admin, userController.getUserById);
router.delete('/:id', auth, admin, userController.deleteUserById);

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
 *  /user/register:
 *    post:
 *      summary: Register
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
 *                - name
 *              properties:
 *                name:
 *                  type: string
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
 *          description: Email already taken
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                code: 401
 *                message: Invalid data
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

/**
 * @swagger
 * path:
 *  /user/profile:
 *    put:
 *      summary: Profile
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *                - name
 *              properties:
 *                name:
 *                  type: string
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
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                code: 401
 *                message: Unauthorized or Invalid data
 */


 /**
 * @swagger
 * path:
 *  /user:
 *    get:
 *      summary: Get All user
 *      description: get All user
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

  /**
 * @swagger
 * path:
 *  /user/{id}:
 *    delete:
 *      summary: delete user By Id
 *      description: delete user By Id
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: user id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/User'
 * */